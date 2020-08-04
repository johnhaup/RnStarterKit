import AsyncStorage from '@react-native-community/async-storage';

// https://github.com/ctrlplusb/easy-peasy/issues/431

export const storage = {
  async getItem(key: string) {
    try {
      const item = (await AsyncStorage.getItem(key)) || '';
      return JSON.parse(item);
    } catch {}
  },
  setItem(key: string, data: any) {
    AsyncStorage.setItem(key, JSON.stringify(data));
  },
  removeItem(key: string) {
    AsyncStorage.removeItem(key);
  },
};
