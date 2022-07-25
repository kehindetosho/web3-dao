// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Box, Text, Grid, Container } from '@web3-ui/components';

export const ColorPalette = () => {
  return (
    <div className={`section darkTheme`}>
      <Text size={`xl`} as={`h3`} weight={'bold'} css={{ padding: '$2' }}>
        Colors
      </Text>
      <div className={`item`}>
        <h3 className={`item-title`}></h3>
        <Container size="3">
          <Grid
            css={{
              gridTemplateColumns: 'repeat(13, minmax(0, 1fr))',
              gap: 2,
              ai: 'center',
            }}
          >
            <Box></Box>
            <Box css={{ ta: 'center', pb: '$2' }}>
              <Text>1</Text>
            </Box>
            <Box css={{ ta: 'center', pb: '$2' }}>
              <Text>2</Text>
            </Box>
            <Box css={{ ta: 'center', pb: '$2' }}>
              <Text>3</Text>
            </Box>
            <Box css={{ ta: 'center', pb: '$2' }}>
              <Text>4</Text>
            </Box>
            <Box css={{ ta: 'center', pb: '$2' }}>
              <Text>5</Text>
            </Box>
            <Box css={{ ta: 'center', pb: '$2' }}>
              <Text>6</Text>
            </Box>
            <Box css={{ ta: 'center', pb: '$2' }}>
              <Text>7</Text>
            </Box>
            <Box css={{ ta: 'center', pb: '$2' }}>
              <Text>8</Text>
            </Box>
            <Box css={{ ta: 'center', pb: '$2' }}>
              <Text>9</Text>
            </Box>
            <Box css={{ ta: 'center', pb: '$2' }}>
              <Text>10</Text>
            </Box>
            <Box css={{ ta: 'center', pb: '$2' }}>
              <Text>11</Text>
            </Box>
            <Box css={{ ta: 'center', pb: '$2' }}>
              <Text>12</Text>
            </Box>
            <Box>
              <Text css={{ fontSize: '$base', fontWeight: 600 }}>Gray</Text>
            </Box>
            <Box css={{ height: 35, backgroundColor: '$gray1' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$gray2' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$gray3' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$gray4' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$gray5' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$gray6' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$gray7' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$gray8' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$gray9' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$gray10' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$gray11' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$gray12' }}></Box>

            <Box>
              <Text css={{ fontSize: '$base', fontWeight: 600 }}>Mauve</Text>
            </Box>
            <Box css={{ height: 35, backgroundColor: '$mauve1' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$mauve2' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$mauve3' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$mauve4' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$mauve5' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$mauve6' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$mauve7' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$mauve8' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$mauve9' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$mauve10' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$mauve11' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$mauve12' }}></Box>

            <Box>
              <Text css={{ fontSize: '$base', fontWeight: 600 }}>Slate</Text>
            </Box>
            <Box css={{ height: 35, backgroundColor: '$slate1' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$slate2' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$slate3' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$slate4' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$slate5' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$slate6' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$slate7' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$slate8' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$slate9' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$slate10' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$slate11' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$slate12' }}></Box>

            <Box>
              <Text css={{ fontSize: '$base', fontWeight: 600 }}>Sage</Text>
            </Box>
            <Box css={{ height: 35, backgroundColor: '$sage1' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$sage2' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$sage3' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$sage4' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$sage5' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$sage6' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$sage7' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$sage8' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$sage9' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$sage10' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$sage11' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$sage12' }}></Box>

            <Box>
              <Text css={{ fontSize: '$base', fontWeight: 600 }}>Olive</Text>
            </Box>
            <Box css={{ height: 35, backgroundColor: '$olive1' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$olive2' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$olive3' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$olive4' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$olive5' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$olive6' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$olive7' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$olive8' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$olive9' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$olive10' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$olive11' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$olive12' }}></Box>

            <Box>
              <Text css={{ fontSize: '$base', fontWeight: 600 }}>Sand</Text>
            </Box>
            <Box css={{ height: 35, backgroundColor: '$sand1' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$sand2' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$sand3' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$sand4' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$sand5' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$sand6' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$sand7' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$sand8' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$sand9' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$sand10' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$sand11' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$sand12' }}></Box>

            <Box css={{ height: 35 }}></Box>
            <Box css={{ height: 35 }}></Box>
            <Box css={{ height: 35 }}></Box>
            <Box css={{ height: 35 }}></Box>
            <Box css={{ height: 35 }}></Box>
            <Box css={{ height: 35 }}></Box>
            <Box css={{ height: 35 }}></Box>
            <Box css={{ height: 35 }}></Box>
            <Box css={{ height: 35 }}></Box>
            <Box css={{ height: 35 }}></Box>
            <Box css={{ height: 35 }}></Box>
            <Box css={{ height: 35 }}></Box>
            <Box css={{ height: 35 }}></Box>

            <Box>
              <Text css={{ fontSize: '$base', fontWeight: 600 }}>Tomato</Text>
            </Box>
            <Box css={{ height: 35, backgroundColor: '$tomato1' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$tomato2' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$tomato3' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$tomato4' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$tomato5' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$tomato6' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$tomato7' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$tomato8' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$tomato9' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$tomato10' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$tomato11' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$tomato12' }}></Box>

            <Box>
              <Text css={{ fontSize: '$base', fontWeight: 600 }}>Red</Text>
            </Box>
            <Box css={{ height: 35, backgroundColor: '$red1' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$red2' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$red3' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$red4' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$red5' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$red6' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$red7' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$red8' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$red9' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$red10' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$red11' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$red12' }}></Box>

            <Box>
              <Text css={{ fontSize: '$base', fontWeight: 600 }}>Crimson</Text>
            </Box>
            <Box css={{ height: 35, backgroundColor: '$crimson1' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$crimson2' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$crimson3' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$crimson4' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$crimson5' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$crimson6' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$crimson7' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$crimson8' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$crimson9' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$crimson10' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$crimson11' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$crimson12' }}></Box>

            <Box>
              <Text css={{ fontSize: '$base', fontWeight: 600 }}>Pink</Text>
            </Box>
            <Box css={{ height: 35, backgroundColor: '$pink1' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$pink2' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$pink3' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$pink4' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$pink5' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$pink6' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$pink7' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$pink8' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$pink9' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$pink10' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$pink11' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$pink12' }}></Box>

            <Box>
              <Text css={{ fontSize: '$base', fontWeight: 600 }}>Plum</Text>
            </Box>
            <Box css={{ height: 35, backgroundColor: '$plum1' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$plum2' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$plum3' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$plum4' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$plum5' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$plum6' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$plum7' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$plum8' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$plum9' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$plum10' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$plum11' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$plum12' }}></Box>

            <Box>
              <Text css={{ fontSize: '$base', fontWeight: 600 }}>Purple</Text>
            </Box>
            <Box css={{ height: 35, backgroundColor: '$purple1' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$purple2' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$purple3' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$purple4' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$purple5' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$purple6' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$purple7' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$purple8' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$purple9' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$purple10' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$purple11' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$purple12' }}></Box>

            <Box>
              <Text css={{ fontSize: '$base', fontWeight: 600 }}>Violet</Text>
            </Box>
            <Box css={{ height: 35, backgroundColor: '$violet1' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$violet2' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$violet3' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$violet4' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$violet5' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$violet6' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$violet7' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$violet8' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$violet9' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$violet10' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$violet11' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$violet12' }}></Box>

            <Box>
              <Text css={{ fontSize: '$base', fontWeight: 600 }}>Indigo</Text>
            </Box>
            <Box css={{ height: 35, backgroundColor: '$indigo1' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$indigo2' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$indigo3' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$indigo4' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$indigo5' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$indigo6' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$indigo7' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$indigo8' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$indigo9' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$indigo10' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$indigo11' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$indigo12' }}></Box>

            <Box>
              <Text css={{ fontSize: '$base', fontWeight: 600 }}>Blue</Text>
            </Box>
            <Box css={{ height: 35, backgroundColor: '$blue1' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$blue2' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$blue3' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$blue4' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$blue5' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$blue6' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$blue7' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$blue8' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$blue9' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$blue10' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$blue11' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$blue12' }}></Box>

            <Box>
              <Text css={{ fontSize: '$base', fontWeight: 600 }}>Cyan</Text>
            </Box>
            <Box css={{ height: 35, backgroundColor: '$cyan1' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$cyan2' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$cyan3' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$cyan4' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$cyan5' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$cyan6' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$cyan7' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$cyan8' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$cyan9' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$cyan10' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$cyan11' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$cyan12' }}></Box>

            <Box>
              <Text css={{ fontSize: '$base', fontWeight: 600 }}>Teal</Text>
            </Box>
            <Box css={{ height: 35, backgroundColor: '$teal1' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$teal2' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$teal3' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$teal4' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$teal5' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$teal6' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$teal7' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$teal8' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$teal9' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$teal10' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$teal11' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$teal12' }}></Box>

            <Box>
              <Text css={{ fontSize: '$base', fontWeight: 600 }}>Green</Text>
            </Box>
            <Box css={{ height: 35, backgroundColor: '$green1' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$green2' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$green3' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$green4' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$green5' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$green6' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$green7' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$green8' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$green9' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$green10' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$green11' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$green12' }}></Box>

            <Box>
              <Text css={{ fontSize: '$base', fontWeight: 600 }}>Grass</Text>
            </Box>
            <Box css={{ height: 35, backgroundColor: '$grass1' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$grass2' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$grass3' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$grass4' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$grass5' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$grass6' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$grass7' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$grass8' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$grass9' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$grass10' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$grass11' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$grass12' }}></Box>

            <Box>
              <Text css={{ fontSize: '$base', fontWeight: 600 }}>Brown</Text>
            </Box>
            <Box css={{ height: 35, backgroundColor: '$brown1' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$brown2' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$brown3' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$brown4' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$brown5' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$brown6' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$brown7' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$brown8' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$brown9' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$brown10' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$brown11' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$brown12' }}></Box>

            <Box>
              <Text css={{ fontSize: '$base', fontWeight: 600 }}>Orange</Text>
            </Box>
            <Box css={{ height: 35, backgroundColor: '$orange1' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$orange2' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$orange3' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$orange4' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$orange5' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$orange6' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$orange7' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$orange8' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$orange9' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$orange10' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$orange11' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$orange12' }}></Box>
          </Grid>
        </Container>
      </div>
    </div>
  );
};
