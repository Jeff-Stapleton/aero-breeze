import React from 'react';
import { View, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export interface SelectProps {
  value: string;
  onChange: (value: string) => void;
  error?: boolean;
  options: { label: string; value: string }[];
}

const Select = React.forwardRef(({ value, onChange, error, options }: SelectProps, ref) => {
  return (
    <View className={`w-full rounded-md border p-2 ${error ? 'border-red-500' : 'border-gray-300'}`}>
      <Picker
        selectedValue={value}
        onValueChange={onChange}
        ref={ref}
        className="text-lg text-gray-900"
      >
        {options.map((option) => (
          <Picker.Item label={option.label} value={option.value} key={option.value} />
        ))}
      </Picker>
    </View>
  );
});

export default Select;
