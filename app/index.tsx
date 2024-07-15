import { View, Text, ScrollView, SafeAreaView  } from 'react-native'
import React, { useState } from 'react'
import { Stack, useRouter } from 'expo-router'

import { COLORS, SIZES } from '@/constants'

export default function index() {
    const router = useRouter();

  return (
    <SafeAreaView style={{flex : 1, backgroundColor: COLORS.lightWhite, justifyContent: 'center', alignItems: 'center'}}>
      <Stack.Screen
            options={{
                headerStyle: {backgroundColor: COLORS.lightWhite},
                headerShadowVisible: false,
                headerLeft: ()=> <Text>Ok</Text>,
                headerRight: ()=> <Text>Ok</Text>,
                headerTitle: "",
            }}
        />
        <ScrollView showsVerticalScrollIndicator={false}></ScrollView>
    </SafeAreaView>
  )
}