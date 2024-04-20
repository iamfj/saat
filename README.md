## Welcome to saat 🌱

Saat (pronounced `zah-t`, like the German word for "seed") is a powerful library designed to streamline the seeding of data in your databases. Built on top of Prisma, saat leverages the Faker library to effortlessly define schemas and seed models and relations. Whether you're setting up a development environment, testing, or just need to populate a database quickly, saat makes it simpler than ever.

### Features

- **Seamless Integration with Prisma**: Works hand-in-hand with your existing Prisma setup.
- **Dynamic Data Generation**: Utilizes Faker to generate realistic and varied datasets.
- **Define Complex Relationships**: Easily seed data that respects model relationships and constraints.
- **Customizable**: Flexible API that lets you define exactly how your data should look.

### Quick Start

#### Installation

```bash
npm install prisma @saat/core
```

#### Usage

Here's a simple example to get you started:

```typescript
import { saat, fake } from '@saat/core';

saat('model', { email: fake('internet.email') });
```

This will seed your `model` with an email field populated by a randomly generated email.

### Contributing

Interested in contributing to saat? We welcome contributions of all forms. Check out our [contributing guidelines](CONTRIBUTING.md) for more information on how to get started.

### License

saat is [MIT licensed](LICENSE).

### Support

If you encounter any issues or have questions, feel free to open an issue on our [GitHub repository](http://github.com/iamfj/saat).

---

Get started with saat today and experience the easiest way to seed your databases!

---

Happy seeding! 🌱
