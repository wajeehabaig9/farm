import { StatusBar } from "expo-status-bar";
import { MaterialIcons } from '@expo/vector-icons';
import { Redirect } from "expo-router";
import { Text, TextInput, TouchableOpacity } from "react-native";
import certificateImage from '../assets/images/certificate1.png';
import map from '../assets/images/map.png';

import hero from '../assets/images/image.png';
import ball from '../assets/images/ball.png';
import  tomatoe from '../assets/images/tomatoe.png';
import  tom1 from '../assets/images/tom1.png';
import  tom2 from '../assets/images/tom2.png';
import  tom3 from '../assets/images/tom3.png';
import FoodSafetyAssessment from "../components/FoodAssesment"
import logo1 from '../assets/images/logo1.png';
import { View, ScrollView, ImageBackground } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons"; // Importing icons from expo-vector-icons
import { Loader } from "../components";
import { useGlobalContext } from "../context/GlobalProvider";
import { useState } from "react"; // Importing useState for handling ID menu toggle
import { useFonts } from 'expo-font'; // Importing useFonts

const Welcome = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };
  const { loading, isLogged } = useGlobalContext();
  const [showIds, setShowIds] = useState(false); // State to toggle the visibility of additional IDs
  const [note, setNote] = useState("");

  
  // Load the Inter font using useFonts hook
  const [fontsLoaded] = useFonts({
    'Inter_400Regular': require('../assets/fonts/Inter-Regular.ttf'),
    'Inter_700Regular': require('../assets/fonts/Inter-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return <Loader isLoading={true} />; // You can show a loader while the font is loading
  }

  if (!loading && isLogged) return <Redirect href="/home" />;

  return (
    <SafeAreaView className="bg-white h-full">
      <Loader isLoading={loading} />
      
      <ScrollView>
        <View className="w-full h-full px-4 space-y-4">
          {/* First Heading with Icon - Bold and Big */}
          <View className="flex flex-row items-center space-x-1 mt-8">
            <Ionicons name="arrow-back" size={25} color="black" />
            <Text className="text-lg" style={{ fontFamily: 'Inter_400Regular'}}> Food Certification</Text>
          </View>

          <View className="my-1" />

          {/* Second Heading without Icon, Bold and Uppercase */}
          <View>
            <Text
              style={{ fontFamily: 'Inter_400Regular', fontWeight:'900', textTransform:'uppercase' }}
            >
              Food Certification
            </Text>
          </View>

          {/* Image with Text Overlay at Bottom Left */}
          <View className="mt-2">
            <ImageBackground
              source={hero}
              className="w-full h-32 rounded overflow-hidden"
              imageStyle={{ borderRadius: 9 }}
            >
              <View className="absolute bottom-0 left-0 p-2 bg-opacity-50">
                <Text className="text-white text-lg"
                  style={{ fontFamily: 'Inter_700Regular', fontWeight:'800', lineHeight:'23'}}
                >
                  FOOD CERTIFICATION
                </Text>
                <Text className="text-white text-xs ">Source certified seeds</Text>
              </View>
            </ImageBackground>
          </View>

          {/* Service Provider Section */}
          <View className="flex flex-row items-center mt-4">
  <Text className="text-xs font-bold">SERVICE PROVIDER</Text>
  <View className="flex flex-row ml-auto space-x-2 items-center">
    <Ionicons name="pencil" size={13} color="black" />
    <Text className="text-[12px] font-bold">EDIT</Text>
    <Ionicons name="download" size={13} color="black" />
    <Text className="text-[12px] font-bold">SAVE</Text>
  </View>
</View>

          {/* Tiny Ball Image Section with ID */}
          <View className="flex flex-row items-center mt-2">
            <View className="flex-1 flex flex-row justify-between">
<View className="flex flex-row space-x-2">
            <ImageBackground
              source={ball}
              className="h-[24px] w-[24px] rounded-full overflow-hidden"
              imageStyle={{ borderRadius: 9 }}
            >
            </ImageBackground>
              <Text className="text-[12px]"  style={{ fontFamily: 'Inter_400Regular', fontWeight:'900'}}>Thola.US </Text>
</View>
       <View className="flex flex-row"> 
       <Text className="text-sm font-bold text-gray-300">ID: </Text>
       <Text className="text-sm font-bold">FNKESE123456</Text>

       </View>
            </View>
          </View>

          <View className="border-t border-gray-800 mt-4" />

           {/* FARMER Section */}
           <View className="mt-0">
            <Text className="text-xs font-black uppercase">FARMER</Text>
          </View>

          <View className="flex flex-row items-center justify-between -mb-2">
            <Text className="text-[12px] font-bold">Customer Information</Text>
            <Ionicons name="create" size={16} color="black" />
          </View>

          {/* New Section with Three Items per Line */}
          <View className="flex flex-row justify-around items-center -mb-5">
            {/* DALLARN FARM Text and Logo on Same Line */}
            <View className="flex flex-row items-center justify-around">
              <Text className="text-[13px] font-bold">Dallan Farm</Text>
              <ImageBackground
                source={logo1}
                className="w-6 h-3 rounded-full ml-2"
                imageStyle={{ borderRadius: 50 }}
              />
            </View>

            <View className="flex-1 justify-around items-center">
              <Text className="text-[7px]  text-center -ml-20">    Sample  #</Text>
            </View>

            <View>
              <Text className="text-[7px]  ">FN1234</Text>
            </View>
          </View>

          {/* 1st Line: Texas, City Hallon */}
          <View className="flex flex-row justify-between items-center -mb-4">
            <Text className="text-[7px] ">24th Ave ,City, Nation</Text>
            <Text className="text-[7px]  -ml-9">DATE</Text>
            <Text className="text-[7px] ">12/07/2024</Text>
          </View>

          {/* 2nd Line: Telephone, Varity */}
          <View className="flex flex-row justify-between items-center -mb-4 ">
            <Text className="text-[7px]  ">Telephone : 000 897 789,897</Text>
            <Text className="text-[7px]  -ml-14">VALIDITY</Text>
            <Text className="text-[7px] ">12/07/2024</Text>
          </View>

          <View className="flex flex-row justify-between items-center">
      <Text className="text-[7px]">Email: j.noir@email.com</Text>

      {/* Customer Type with Dropdown */}
      <TouchableOpacity 
        className="flex flex-row items-center text-[7px] ml-2"
        onPress={toggleDropdown}
      >
        <Text className="text-[7px] mr-1">CUSTOMER TYPE</Text>
        <Ionicons name="chevron-down" size={10} color="black"  />
      </TouchableOpacity>

      {isDropdownVisible && (
        <View className="absolute top-full mt-1 left-0 bg-white shadow-lg rounded-md ml-44 z-10">
          <Text className="text-[7px] py-1 px-2">Agronomist</Text>
          <Text className="text-[7px] py-1 px-2">Farmer</Text>
          <Text className="text-[7px] py-1 px-2">Researcher</Text>
        </View>
      )}


      <Text className="text-[7px]">Agronomist</Text>
    </View>

          {/* Rating Section with Stars */}
          <View className="flex flex-row items-center justify-between mb-1">
            <View className="flex flex-row items-center ">
              {/* Green-filled Stars */}
              <Ionicons name="star" size={13} color="green" />
              <Ionicons name="star" size={13} color="green" />
              <Ionicons name="star" size={13} color="green" />
              <Ionicons name="star" size={13} color="green" />
              {/* Empty Star */}
              <Ionicons name="star-outline" size={16} color="gray" />
              <Text className="text-[7px]  font-bold mx-2">Rating4.5(278)</Text>
            </View>
            <Text className="text-[7px]  text-center -ml-12">CUSTOMER ID</Text>
            <Text className="text-[7px] font-bold text-right bg-slate-100 p-1">FNKEFA123456</Text>
          </View>

          

          {/* Bottom Line */}
          <View className="border-t border-gray-800 mt-4" />

          {/* Tomatoes Section with Icon */}
          <View className="flex flex-row items-center justify-between mt-6 ">
            <Text className="text-sm font-bold">TOMATOES</Text>
            <ImageBackground
              source={tomatoe}
              className="h-[24px] w-[24px] rounded-full overflow-hidden"
              imageStyle={{ borderRadius: 9 }}
            >
            </ImageBackground>
          </View>

          <View>
            <Text className="text-sm font-bold">FOOD SAFETY REPORTS</Text>
            <View>
              {/* Rounded Image with Black Border */}
              <View className="mt-4 flex items-center">
                <ImageBackground
                  source={certificateImage}
                  className="w-full h-[200px]  overflow-hidden border-2 border-gray-400 rounded-lg"
                  imageStyle={{ borderRadius: 100 }}
                />
              </View>
              <View className={"flex flex-row"}>
                <Text className="text-[10px] font-regular text-gray-400">Last test results: </Text>
                <Text className="text-[10px] font-bold">15/10/2024</Text>
              </View>
            </View>
            {/* New Heading: FOOD SAFETY OFFICER */}
            <View className="mt-6">
              <Text className="text-lg font-bold uppercase">FOOD SAFETY OFFICER</Text>
            </View>
            
            {/* Tiny Ball Image Section with ID */}
            <View className="flex flex-row items-center mt-2">
            <View className="flex-1 flex flex-row justify-between">
<View className="flex flex-row space-x-2">
            <ImageBackground
              source={ball}
              className="h-[24px] w-[24px] rounded-full overflow-hidden"
              imageStyle={{ borderRadius: 9 }}
            >
            </ImageBackground>
              <Text className="text-[12px]"  style={{ fontFamily: 'Inter_400Regular', fontWeight:'900'}}>Thola.US </Text>
</View>
       <View className="flex flex-row bg-[#EDF0EF] p-1 items-center"> 
  
       <TouchableOpacity 
        className="flex flex-row items-center text-[7px] ml-2"
        onPress={toggleDropdown}
      >
            <Text className="text-sm font-bold text-gray-300">ID: </Text>
            <Text className="text-sm font-bold">FNKESE123456</Text>
        <Ionicons name="chevron-down" size={13} color="black"  />
      </TouchableOpacity>

      {isDropdownVisible && (
        <View className="absolute top-full mt-1 left-0 bg-white shadow-lg rounded-md ml-20 z-10">
          <Text className="text-[7px] py-1 px-2">FNKESE123456</Text>
          <Text className="text-[7px] py-1 px-2">FNKESE123456</Text>
          <Text className="text-[7px] py-1 px-2">FNKESE123456</Text>
        </View>
      )}
       </View>
       
            </View>
            
          </View>
      <Text className="text-right text-[8px] p-1">Insert Food Officers ID Number</Text>

<View>

            {/* Food Safety Officer Details */}
            <View className="flex flex-row justify-around space-x-1 ">
           <View className="mt-4">
              <Text className="text-sm bg-[#F5F5F5] p-1 rounded-md mb-1 ">Safety Officer</Text>
              <Text className="text-sm bg-[#F5F5F5] p-1 rounded-md mb-1">position</Text>
              <Text className="text-sm bg-[#F5F5F5] p-1 rounded-md mb-1">phone number</Text>
              <Text className="text-sm bg-[#F5F5F5] p-1 rounded-md mb-1">Email</Text>
              <Text className="text-sm bg-[#F5F5F5] p-1 rounded-md mb-1">Address</Text>
            </View>

            <View className="mt-4">
              <Text className="text-sm font-black bg-[#F5F5F5] p-1 rounded-md mb-1">Mkdulima Dadisi</Text>
              <Text className="text-sm font-black bg-[#F5F5F5] p-1 rounded-md mb-1">Safety Officer</Text>
              <Text className="text-sm font-black bg-[#F5F5F5] p-1 rounded-md mb-1">+254702157000</Text>
              <Text className="text-[11px] font-black bg-[#F5F5F5] p-2 rounded-md mb-1">Foodsafe@farmnet.Africa </Text>
              <Text className="text-sm font-black bg-[#F5F5F5] p-1 rounded-md mb-1">1 Kolali Awes, Migs </Text>
            </View>
    
            
           </View>
           <View className="mt-6">
  {/* Note Heading */}
  <Text className="text-lg font-bold uppercase">Note</Text>

  {/* Text Area */}
  <TextInput
    value={note}
    onChangeText={setNote}
    multiline
    numberOfLines={10} // Increased number of lines to make the area bigger
    className="mt-2 p-4 border border-gray-300 rounded-lg h-40" // Added height for larger input area
  />
</View>
<View className="mt-5 flex flex-row  items-center justify-between">
<Text className="text-lg font-bold uppercase">PICTURES</Text>
<Ionicons
      name="add"
      size={27}
      color="black"  // Black icon
     
    />
</View>
<View className="flex flex-row items-center space-x-1 mt-5">
  {/* First Image with Add Icon in Front */}
  <View className="relative z-10 ">
    <Ionicons
      name="add"
      size={20}
      color="black"  // Black icon
      style={{
        position: 'absolute',
        top: 2, // Adjust this value to position the icon above the image
        left: '90%',
        transform: [{ translateX: -15 }], // Centers the icon horizontally
        zIndex: 10, // Ensures the icon is above the image
      }}
    />
    <ImageBackground
      source={tom3}
      className="w-[105px] h-[76px] overflow-hidden border-2 border-gray-400 rounded-lg"

    />
  </View>

  {/* Second Image with Add Icon in Front */}
  <View className="relative">
  <Ionicons
      name="add"
      size={20}
      color="black"  // Black icon
      style={{
        position: 'absolute',
        top: 2, // Adjust this value to position the icon above the image
        left: '90%',
        transform: [{ translateX: -15 }], // Centers the icon horizontally
        zIndex: 10, // Ensures the icon is above the image
      }}
    />
    <ImageBackground
      source={tom2}
      className="w-[105px] h-[76px] overflow-hidden border-2 border-gray-400 rounded-lg"
    />
  </View>

  {/* Third Image with Add Icon in Front */}
  <View className="relative">
  <Ionicons
      name="add"
      size={20}
      color="black"  // Black icon
      style={{
        position: 'absolute',
        top: 2, // Adjust this value to position the icon above the image
        left: '90%',
        transform: [{ translateX: -15 }], // Centers the icon horizontally
        zIndex: 10, // Ensures the icon is above the image
      }}
    />
    <ImageBackground
      source={tom1}
      className="w-[105px] h-[76px] overflow-hidden border-2 border-gray-400 rounded-lg"
    />
  </View>
</View>


<View className="mt-5">
<FoodSafetyAssessment/>
</View>

<View className="mt-6">
  {/* Note Heading */}
  <Text className="text-lg font-bold uppercase">COMMENTS</Text>

  {/* Text Area */}
  <TextInput
    value={note}
    onChangeText={setNote}
    multiline
    numberOfLines={10} // Increased number of lines to make the area bigger
    className="mt-2 p-4 border border-gray-300 h-28 rounded-lg" // Added height for larger input area
  />
</View>

    <View className="flex-1 justify-between items-center mt-2 ">
      {/* Three Texts with Icons */}
      <View className="w-full flex-row justify-between items-center p-2 mb-6">
        {/* Save (Left-Aligned) */}
        <View className="flex-row items-center">
          <MaterialIcons name="save" size={16} color="black" />
          <Text className="ml-2 text-[12px] font-semibold">Save</Text>
        </View>
        {/* Edit (Center-Aligned) */}
        <View className="flex-row items-center">
          <MaterialIcons name="edit" size={16} color="black" />
          <Text className="ml-2 text-[12px] font-semibold">Edit</Text>
        </View>
        {/* Add (Right-Aligned) */}
        <View className="flex-row items-center">
          <MaterialIcons name="add" size={16} color="black" />
          <Text className="ml-2 text-[12px] font-semibold">Add</Text>
        </View>
      </View>

      {/* Buttons */}
      <View className="w-full flex-row justify-between">
        {/* Light Button */}
        <TouchableOpacity className="bg-[#EDF0EF]  w-[165px] h-[33px] rounded-lg mr-2 items-center " 
        style={{
    fontFamily: 'Inter_400Regular',
    shadowColor: 'black', // Shadow color
    shadowOffset: { width: 20, height: 7 }, // Horizontal and vertical shadow offset
    shadowOpacity: 0.4, // Opacity of the shadow
    shadowRadius: 5, // Blur radius of the shadow
    elevation: 5, // Required for Android shadow
  }}>
          <Text className="text-black text-[16px] font-semibold ">Evaluate</Text>
        </TouchableOpacity>

        {/* Green Button */}
        <TouchableOpacity className="bg-[#155528]  w-[165px] h-[33px] rounded-lg mr-4 items-center   "
         style={{
    fontFamily: 'Inter_400Regular',
    shadowColor: 'black', // Shadow color
    shadowOffset: { width: 20, height: 7 }, // Horizontal and vertical shadow offset
    shadowOpacity: 0.4, // Opacity of the shadow
    shadowRadius: 5, // Blur radius of the shadow
    elevation: 5, // Required for Android shadow
  }}>
          <Text className="text-white text-[16px] font-semibold">View Evaluation</Text>
        </TouchableOpacity>
      </View>
    </View>
    <Text className="text-lg font-bold uppercase mt-4">FARM MAP</Text>
            <View>
              {/* Rounded Image with Black Border */}
              <View className="mt-4 flex items-center">
                <ImageBackground
                  source={map}
                  className="w-full h-[200px]  overflow-hidden border-2 border-gray-400 rounded-lg"
      
                />
              </View>
           
            </View>

            <View className="mt-8">

            </View>
          </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Welcome;
