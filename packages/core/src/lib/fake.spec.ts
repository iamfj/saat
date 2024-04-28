import { describe, expect, it } from 'vitest';
import { faker } from '@faker-js/faker';
import { fake } from '@/lib/fake';
import { withFrozenSeed } from '@/lib/utils';

describe('faker generator', () => {
  it('should fake a building number', () => {
    expect(withFrozenSeed(() => fake('location.buildingNumber')())).toBe(
      withFrozenSeed(() => faker.location.buildingNumber()),
    );
  });
});
