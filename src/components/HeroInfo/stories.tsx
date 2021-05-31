import { Meta, Story } from '@storybook/react/types-6-0';

import HeroInfo, { HeroInfoProps } from '.';

export default {
  title: 'HeroInfo',
  component: HeroInfo,

  args: {
    id: 123,
    name: 'iron man',
    description:
      'Inventor Tony Stark applies his genius for high-tech solutions to problems as Iron Man, the armored Avenger.',
    wikiLink: 'https://google.com',
    comics: 123,
    series: 1234,
    stories: 12345,
  },
} as Meta<HeroInfoProps>;

export const Basic: Story<HeroInfoProps> = args => <HeroInfo {...args} />;
