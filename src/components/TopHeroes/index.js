import React from 'react';
import {
  HeroContainer,
  Title,
  TabContainer,
  Item,
  HeroImage,
  HeroName,
} from './styles';

import ironman from '~/assets/icons/ironman.png';
import hulk from '~/assets/icons/hulk.png';
import spiderman from '~/assets/icons/spiderman.png';
import captain from '~/assets/icons/captain.png';
import thanos from '~/assets/icons/thanos.png';

export default function TopHeroes({navigation}) {
  return (
    <HeroContainer>
      <Title>Top heroes</Title>
      <TabContainer>
        <Item
          onPress={() =>
            navigation.navigate('HeroDetails', {name: 'Iron Man'})
          }>
          <HeroImage source={ironman} />
          <HeroName>Iron Man</HeroName>
        </Item>
        <Item
          onPress={() => navigation.navigate('HeroDetails', {name: 'Hulk'})}>
          <HeroImage source={hulk} />
          <HeroName>Hulk</HeroName>
        </Item>
        <Item
          onPress={() =>
            navigation.navigate('HeroDetails', {name: 'Spider-Man'})
          }>
          <HeroImage source={spiderman} />
          <HeroName>Spider Man</HeroName>
        </Item>
        <Item
          onPress={() =>
            navigation.navigate('HeroDetails', {name: 'Captain America'})
          }>
          <HeroImage source={captain} />
          <HeroName>Captain America</HeroName>
        </Item>
        <Item
          onPress={() => navigation.navigate('HeroDetails', {name: 'Thanos'})}>
          <HeroImage source={thanos} />
          <HeroName>Thanos</HeroName>
        </Item>
      </TabContainer>
    </HeroContainer>
  );
}
