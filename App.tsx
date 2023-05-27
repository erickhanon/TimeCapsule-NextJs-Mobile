import { StatusBar } from 'expo-status-bar'
import {
  ImageBackground,
  View,
  Text,
  TouchableOpacity,
  Linking,
} from 'react-native'
import bg from './src/assets/bg.png'
import { styled } from 'nativewind'
import Logo from './src/assets/logo.svg'

import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto'

import { BaiJamjuree_700Bold } from '@expo-google-fonts/bai-jamjuree'

import Stripes from './src/assets/stripes.svg'

const StyledStripes = styled(Stripes)

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    BaiJamjuree_700Bold,
  })

  if (!fontsLoaded) {
    return null
  }

  return (
    <ImageBackground
      source={bg}
      className="relative flex-1 items-center bg-gray-900 px-8 py-10"
      imageStyle={{ position: 'absolute', left: '-100%' }}
    >
      <StyledStripes className="absolute left-2" />

      <View className="flex-1 items-center justify-center gap-6">
        <Logo />
        <View className="space-y-2">
          <Text className="text-center font-title text-2xl leading-tight text-gray-50">
            Sua Capsula do Tempo
          </Text>
          <Text className="text-center font-body text-base leading-relaxed text-gray-100">
            Guarde todos os momentos os importantes da sua vida!
          </Text>
        </View>
        <TouchableOpacity className="rounded-full bg-green-500 px-5 py-2">
          <Text className="font-title text-sm uppercase">
            Guarde Uma Lembrança
          </Text>
        </TouchableOpacity>
      </View>
      <Text className="absolute bottom-3 font-body text-sm text-gray-100">
        Made with ❤️ by{' '}
        <Text
          className="text-green-500"
          onPress={() => Linking.openURL('https://github.com/erickhanon')}
        >
          Erick Marques
        </Text>
      </Text>
      <StatusBar style="light" translucent />
    </ImageBackground>
  )
}
