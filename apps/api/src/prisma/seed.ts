import { prisma } from './prisma';
import argon2 from 'argon2';
import {
  categories,
  units,
  sources,
  commodities,
  users,
  markets,
  observations,
} from './constants.js';

export async function main() {
  for (const category of categories) {
    const result = await prisma.category.upsert({
      where: {
        slug: category.slug,
      },
      create: category,
      update: {},
    });

    console.log(`Category: ${result.name} (${result.id})`);
  }

  for (const unit of units) {
    const result = await prisma.unit.upsert({
      where: {
        symbol: unit.symbol,
      },
      create: unit,
      update: {},
    });

    console.log(`Units: ${result.name} (${result.id})`);
  }

  for (const market of markets) {
    const result = await prisma.market.upsert({
      where: {
        marketIdentity: {
          name: market.name,
          city: market.city,
          state: market.state,
        },
      },
      update: {},
      create: market,
    });

    console.log(`Market: ${result.name} (${result.city}, ${result.state})`);
  }

  for (const commodity of commodities) {
    const result = await prisma.commodity.upsert({
      where: {
        slug: commodity.slug,
      },
      update: {},
      create: {
        name: commodity.name,
        slug: commodity.slug,
        category: {
          connect: {
            slug: commodity.categorySlug,
          },
        },
      },
    });

    console.log(`Commodity: ${result.name} (${result.slug})`);
  }

  for (const source of sources) {
    const result = await prisma.source.upsert({
      where: {
        name_type: {
          name: source.name,
          type: source.type,
        },
      },
      update: {},
      create: source,
    });

    console.log(`Source: ${result.name} (${result.type})`);
  }

  for (const user of users) {
    const password = await argon2.hash(user.password, {
      type: argon2.argon2id,
    });

    const result = await prisma.user.upsert({
      where: {
        email: user.email,
      },
      update: {
        name: user.name,
        role: user.role,
      },
      create: {
        ...user,
        password,
      },
    });

    console.log(`User: ${result.email} (${result.role})`);
  }

  for (const observation of observations) {
    const result = await prisma.priceObservation.create({
      data: {
        price: observation.price,
        quantity: observation.quantity,
        status: observation.status,
        observedAt: new Date(observation.observedAt),

        commodity: {
          connect: {
            slug: observation.commoditySlug,
          },
        },

        market: {
          connect: {
            marketIdentity: observation.market,
          },
        },

        unit: {
          connect: {
            symbol: observation.unitSymbol,
          },
        },

        source: {
          connect: {
            name_type: observation.source,
          },
        },

        submitter: {
          connect: {
            email: observation.submitterEmail,
          },
        },

        ...(observation.verifierEmail
          ? {
              verifier: {
                connect: {
                  email: observation.verifierEmail,
                },
              },
            }
          : {}),

        verifiedAt: observation.verifiedAt
          ? new Date(observation.verifiedAt)
          : undefined,

        verificationNote: observation.verificationNote,
      },
    });

    console.log(
      `Observation: ${result.id} | ${observation.commoditySlug} | ₦${observation.price}`,
    );
  }
}

main()
  .catch((e) => {
    console.error('Database test failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
