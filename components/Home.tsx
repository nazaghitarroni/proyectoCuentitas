import { Text, View } from 'react-native';

type ScreenContentProps = {
  title: string;
  path: string;
  children?: React.ReactNode;
};

export const ScreenContent = ({ title, path, children }: ScreenContentProps) => {
  return (
    <View className='bg-slate-500 my-auto mx-auto'>
      <Text>hola</Text>
    </View>
  );
};

