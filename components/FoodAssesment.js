import React, { useState } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity,ImageBackground ,} from "react-native";
import { styled } from "nativewind";
import { MaterialIcons } from '@expo/vector-icons';

import {  StyleSheet } from 'react-native';

import icon1 from "../assets/images/icon.png"

const FoodSafetyAssessment = () => {
   const [isChecked1, setIsChecked1] = useState(false);
   const [isChecked2, setIsChecked2] = useState(false);
   const [isChecked3, setIsChecked3] = useState(false);
   const [isChecked4, setIsChecked4] = useState(false);
   const [isChecked5, setIsChecked5] = useState(false);
   const [isChecked6, setIsChecked6] = useState(false);
   const [isChecked7, setIsChecked7] = useState(false);
   const [isChecked8, setIsChecked8] = useState(false);
   const [isChecked9, setIsChecked9] = useState(false);
   const [isChecked10, setIsChecked10] = useState(false);
   const [isChecked11, setIsChecked11] = useState(false);
   const [isChecked12, setIsChecked12] = useState(false);
   const [isChecked13, setIsChecked13] = useState(false);
   const [isChecked14, setIsChecked14] = useState(false);
   const [isChecked15, setIsChecked15] = useState(false);
   const [isChecked16, setIsChecked16] = useState(false);
   const [isChecked17, setIsChecked17] = useState(false);
   const [isChecked18, setIsChecked18] = useState(false);
   
   const toggleCheck = () => {
     setIsChecked(!isChecked);
   };
   const toggleCheck1 = () => {
      setIsChecked(!isChecked);
    };

  return (
    <ScrollView className="bg-customGray flex-1">
<View>
    <View className=" mt-5">
        <Text className="text-lg font-bold bg-[#EDF0EF] p-1">Food Safety Assessment</Text>
    </View>
    <View>
    <Text className="text-lg font-bold mt-3">1: Management</Text>
    <Text className="text-[10px] font-regular ">Select type pf assessment</Text>

    </View>
<View>
<View className="mt-1 flex flex-row items-center space-x-1">
     
     <View>
     <View className="flex flex-row items-center space-x-8 bg-[#EDF0EF] p-2 rounded-md">
         <Text className="text-[7px] font-bold ">Traceability and Recall</Text>

                <ImageBackground
                   source={icon1}
                   className=" w-4 h-4 overflow-hidden "
                 />
         </View>
         <View>
         <View style={styles.container} >
         <Text  className="text-[7px] w-[166px] mt-1">Each production area is clearly defined and coded to enable traceability in the event of a recall.</Text>
         <TouchableOpacity
        style={[
          styles.checkbox,
          isChecked1 && styles.checked, // Apply checked styles
        ]}
        className="ml-20 -mt-3"
        
        onPress={() => setIsChecked1(!isChecked1)} // Toggle state
      >
        {isChecked1 && (
          <MaterialIcons name="check" size={8} color="white" /> // Add check icon
        )}
      </TouchableOpacity>

    </View>
            </View>
            <View className="flex flex-row items-center space-x-7 bg-[#EDF0EF] p-2 rounded-md">
         <Text className="text-[7px] font-bold w-[100] ">Santitation and Hygene Training Policy</Text>

                <ImageBackground
                   source={icon1}
                   className=" w-4 h-4 overflow-hidden "
                 />
         </View>
         <View>
                <Text  className="text-[7px] w-[166px] mt-1">Each production area is clearly defined and coded to enable traceability in the event of a recall.</Text>
                <TouchableOpacity
        style={[
          styles.checkbox,
          isChecked2 && styles.checked, // Apply checked styles
        ]}
        className="ml-20 -mt-3"
        
        onPress={() => setIsChecked2(!isChecked2)} // Toggle state
      >
        {isChecked2 && (
          <MaterialIcons name="check" size={8} color="white" /> // Add check icon
        )}
      </TouchableOpacity>
            </View>
            <View className="flex flex-row items-center space-x-1 bg-[#EDF0EF] p-2 rounded-md">
         <Text className="text-[7px] font-bold w-[120] ">Product Contamination Policy</Text>

                <ImageBackground
                   source={icon1}
                   className=" w-4 h-4 overflow-hidden "
                 />
         </View>
         <View>
                <Text  className="text-[7px] w-[166px] mt-1">Each production area is clearly defined and coded to enable traceability in the event of a recall.</Text>
                <TouchableOpacity
        style={[
          styles.checkbox,
          isChecked3 && styles.checked, // Apply checked styles
        ]}
        className="ml-20 -mt-3"
        
        onPress={() => setIsChecked3(!isChecked3)} // Toggle state
      >
        {isChecked3 && (
          <MaterialIcons name="check" size={8} color="white" /> // Add check icon
        )}
      </TouchableOpacity>
            </View>
            <View className="flex flex-row items-center space-x-4 bg-[#EDF0EF] p-2 rounded-md">
         <Text className="text-[7px] font-bold ">Pesticide/Chemical Use </Text>

                <ImageBackground
                   source={icon1}
                   className=" w-4 h-4 overflow-hidden "
                 />
         </View>
         <View>
                <Text  className="text-[7px] w-[166px] mt-1">Each production area is clearly defined and coded to enable traceability in the event of a recall.</Text>
                <TouchableOpacity
        style={[
          styles.checkbox,
          isChecked4 && styles.checked, // Apply checked styles
        ]}
        className="ml-20 -mt-3"
        
        onPress={() => setIsChecked4(!isChecked4)} // Toggle state
      >
        {isChecked4 && (
          <MaterialIcons name="check" size={8} color="white" /> // Add check icon
        )}
      </TouchableOpacity>
            </View>
            <View className="flex flex-row items-center space-x-9 bg-[#EDF0EF] p-2 rounded-md">
         <Text className="text-[7px] font-bold ">Sewage Treatment </Text>

                <ImageBackground
                   source={icon1}
                   className=" w-4 h-4 overflow-hidden "
                 />
         </View>
         <View>
                <Text  className="text-[7px] w-[166px] mt-1">Each production area is clearly defined and coded to enable traceability in the event of a recall.</Text>
                <TouchableOpacity
        style={[
          styles.checkbox,
          isChecked5 && styles.checked, // Apply checked styles
        ]}
        className="ml-20 -mt-3"
        
        onPress={() => setIsChecked5(!isChecked5)} // Toggle state
      >
        {isChecked5 && (
          <MaterialIcons name="check" size={8} color="white" /> // Add check icon
        )}
      </TouchableOpacity>
            </View>
            <View className="flex flex-row items-center  bg-[#EDF0EF] p-2 rounded-md">
         <Text className="text-[7px] font-bold w-[120px]">Manure & Municipal Biosolids</Text>

                <ImageBackground
                   source={icon1}
                   className=" w-4 h-4 overflow-hidden "
                 />
         </View>
         <View>
                <Text  className="text-[7px] w-[166px] mt-1">Each production area is clearly defined and coded to enable traceability in the event of a recall.</Text>
                <TouchableOpacity
        style={[
          styles.checkbox,
          isChecked6 && styles.checked, // Apply checked styles
        ]}
        className="ml-20 -mt-3"
        
        onPress={() => setIsChecked6(!isChecked6)} // Toggle state
      >
        {isChecked6 && (
          <MaterialIcons name="check" size={8} color="white" /> // Add check icon
        )}
      </TouchableOpacity>
            </View>
         
     </View>

     <View>
   
            <View className="flex flex-row items-center space-x-3 bg-[#EDF0EF] p-2 rounded-md">
             <Text className="text-[7px] font-bold ">Worker Health & Hygiene</Text>
                <ImageBackground
                   source={icon1}
                   className=" w-4 h-4 overflow-hidden "
                 />
         </View>
         <View>
                <Text  className="text-[7px] w-[166px] mt-1">Each production area is clearly defined and coded to enable traceability in the event of a recall.</Text>
                <TouchableOpacity
        style={[
          styles.checkbox,
          isChecked7 && styles.checked, // Apply checked styles
        ]}
        className="ml-20 -mt-3"
        
        onPress={() => setIsChecked7(!isChecked5)} // Toggle state
      >
        {isChecked7 && (
          <MaterialIcons name="check" size={8} color="white" /> // Add check icon
        )}
      </TouchableOpacity>
            </View>
            <View className="flex flex-row items-center space-x-3 bg-[#EDF0EF] p-2 rounded-md">
             <Text className="text-[7px] font-bold w-[100px] ">Employee Infectious Disease Policy</Text>
                <ImageBackground
                   source={icon1}
                   className=" w-4 h-4 overflow-hidden "
                 />
         </View>
         <View>
        <Text className="text-[7px] w-[166px] mt-1">
          Each production area is clearly defined and coded to enable traceability in the event of a recall.
        </Text>
        <TouchableOpacity
          style={[
            styles.checkbox,
            isChecked8 && styles.checked, // Apply checked styles
          ]}
                 className="ml-20 -mt-3"
          onPress={() => setIsChecked8(!isChecked8)} // Toggle state
        >
          {isChecked8 && (
            <MaterialIcons name="check" size={8} color="white" /> // Add check icon
          )}
        </TouchableOpacity>
      </View>
            <View className="flex flex-row items-center space-x-11 bg-[#EDF0EF] p-2 rounded-md">
             <Text className="text-[7px] font-bold ">First Aid Policy</Text>
                <ImageBackground
                   source={icon1}
                   className=" w-4 h-4 overflow-hidden "
                 />
         </View>
         <View>
        <Text className="text-[7px] w-[166px] mt-1">
          Each production area is clearly defined and coded to enable traceability in the event of a recall.
        </Text>
        <TouchableOpacity
          style={[
            styles.checkbox,
            isChecked9 && styles.checked, // Apply checked styles
          ]}
                 className="ml-20 -mt-3"
          onPress={() => setIsChecked9(!isChecked9)} // Toggle state
        >
          {isChecked9 && (
            <MaterialIcons name="check" size={8} color="white" /> // Add check icon
          )}
        </TouchableOpacity>
      </View>
            <View className="flex flex-row items-center space-x-2  bg-[#EDF0EF] p-2 rounded-md">
             <Text className="text-[7px] font-bold w-[100px]">Water (Pond, Stream, Well, Municipal, Other)</Text>
                <ImageBackground
                   source={icon1}
                   className=" w-4 h-4 overflow-hidden "
                 />
         </View>
         <View>
        <Text className="text-[7px] w-[166px] mt-1">
          Each production area is clearly defined and coded to enable traceability in the event of a recall.
        </Text>
        <TouchableOpacity
          style={[
            styles.checkbox,
            isChecked10 && styles.checked, // Apply checked styles
          ]}
                 className="ml-20 -mt-3"
          onPress={() => setIsChecked10(!isChecked10)} // Toggle state
        >
          {isChecked10 && (
            <MaterialIcons name="check" size={8} color="white" /> // Add check icon
          )}
        </TouchableOpacity>
      </View>
                 <View className="flex flex-row items-center space-x-3 bg-[#EDF0EF] p-2 rounded-md">
             <Text className="text-[7px] font-bold w-[90px] ">Animals/Wildlife/Livestock </Text>
                <ImageBackground
                   source={icon1}
                   className=" w-4 h-4 overflow-hidden "
                 />
         </View>
         <View>
        <Text className="text-[7px] w-[166px] mt-1">
          Each production area is clearly defined and coded to enable traceability in the event of a recall.
        </Text>
        <TouchableOpacity
          style={[
            styles.checkbox,
            isChecked11 && styles.checked, // Apply checked styles
          ]}
                 className="ml-20 -mt-3"
          onPress={() => setIsChecked11(!isChecked11)} // Toggle state
        >
          {isChecked11 && (
            <MaterialIcons name="check" size={8} color="white" /> // Add check icon
          )}
        </TouchableOpacity>
      </View>
            <View className="flex flex-row items-center space-x-20 bg-[#EDF0EF] p-2 rounded-md">
             <Text className="text-[7px] font-bold ">Soils</Text>
                <ImageBackground
                   source={icon1}
                   className=" w-4 h-4 overflow-hidden "
                 />
         </View>
         <View>
        <Text className="text-[7px] w-[166px] mt-1">
          Each production area is clearly defined and coded to enable traceability in the event of a recall.
        </Text>
        <TouchableOpacity
          style={[
            styles.checkbox,
            isChecked12 && styles.checked, // Apply checked styles
          ]}
                 className="ml-20 -mt-3"
          onPress={() => setIsChecked12(!isChecked11)} // Toggle state
        >
          {isChecked12 && (
            <MaterialIcons name="check" size={8} color="white" /> // Add check icon
          )}
        </TouchableOpacity>
      </View>
     </View>

 </View>
</View>
   <View className=" mt-3">
        <Text className="text-[12px] font-bold p-1">2: Field Harvest and Field Packing Activities </Text>
    </View>
   
<View>
<View className="mt-1 flex flex-row items-center space-x-1">
     
     <View>
     <View className="flex flex-row items-center space-x-2 bg-[#EDF0EF] p-2 rounded-md mt-3">
         <Text className="text-[7px] font-bold ">Field Sanitation and Hygiene</Text>

                <ImageBackground
                   source={icon1}
                   className=" w-4 h-4 overflow-hidden "
                 />
         </View>
         <View>
        <Text className="text-[7px] w-[166px] mt-1">
          Each production area is clearly defined and coded to enable traceability in the event of a recall.
        </Text>
        <TouchableOpacity
          style={[
            styles.checkbox,
            isChecked13 && styles.checked, // Apply checked styles
          ]}
                 className="ml-20 -mt-3"
          onPress={() => setIsChecked13(!isChecked11)} // Toggle state
        >
          {isChecked13 && (
            <MaterialIcons name="check" size={8} color="white" /> // Add check icon
          )}
        </TouchableOpacity>
      </View>
            <View className="flex flex-row items-center space-x-7 bg-[#EDF0EF] p-2 rounded-md mt-2">
         <Text className="text-[7px] font-bold w-[100] "> 3: House Packing Facilities </Text>

                <ImageBackground
                   source={icon1}
                   className=" w-4 h-4 overflow-hidden "
                 />
         </View>
         <View>
        <Text className="text-[7px] w-[166px] mt-1">
          Each production area is clearly defined and coded to enable traceability in the event of a recall.
        </Text>
        <TouchableOpacity
          style={[
            styles.checkbox,
            isChecked14 && styles.checked, // Apply checked styles
          ]}
                 className="ml-20 -mt-3"
          onPress={() => setIsChecked14(!isChecked14)} // Toggle state
        >
          {isChecked14 && (
            <MaterialIcons name="check" size={8} color="white" /> // Add check icon
          )}
        </TouchableOpacity>
      </View>

            <View className="flex flex-row items-center space-x-4 bg-[#EDF0EF] p-2 rounded-md mt-2">
         <Text className="text-[7px] font-bold w-[120px] "> 5: Wholesale Distribution Center/Terminal Warehouse  </Text>

                <ImageBackground
                   source={icon1}
                   className=" w-4 h-4 overflow-hidden "
                 />
         </View>
         <View>
        <Text className="text-[7px] w-[166px] mt-1">
          Each production area is clearly defined and coded to enable traceability in the event of a recall.
        </Text>
        <TouchableOpacity
          style={[
            styles.checkbox,
            isChecked15 && styles.checked, // Apply checked styles
          ]}
                 className="ml-20 -mt-3"
          onPress={() => setIsChecked15(!isChecked15)} // Toggle state
        >
          {isChecked15 && (
            <MaterialIcons name="check" size={8} color="white" /> // Add check icon
          )}
        </TouchableOpacity>
      </View>
      
         
     </View>

     <View>
   
            <View className="flex flex-row items-center  bg-[#EDF0EF] p-2 rounded-md mt-2">
            
             <Text className="text-[7px] font-bold  w-[150px]">Field Harvesting and Transportation</Text>
             <ImageBackground
                   source={icon1}
                   className=" w-4 h-4 overflow-hidden -ml-9 "
                 />
         </View>
         <View>
        <Text className="text-[7px] w-[166px] mt-1">
          Each production area is clearly defined and coded to enable traceability in the event of a recall.
        </Text>
        <TouchableOpacity
          style={[
            styles.checkbox,
            isChecked16 && styles.checked, // Apply checked styles
          ]}
                 className="ml-20 -mt-3"
          onPress={() => setIsChecked16(!isChecked16)} // Toggle state
        >
          {isChecked16 && (
            <MaterialIcons name="check" size={8} color="white" /> // Add check icon
          )}
        </TouchableOpacity>
      </View>
            <View className="flex flex-row items-center space-x-3 bg-[#EDF0EF] p-2 rounded-md mt-2">
             <Text className="text-[7px] font-bold w-[100px] ">4: Storage and 
             Transportation</Text>
                <ImageBackground
                   source={icon1}
                   className=" w-4 h-4 overflow-hidden "
                 />
         </View>
         <View>
        <Text className="text-[7px] w-[166px] mt-1">
          Each production area is clearly defined and coded to enable traceability in the event of a recall.
        </Text>
        <TouchableOpacity
          style={[
            styles.checkbox,
            isChecked17 && styles.checked, // Apply checked styles
          ]}
                 className="ml-20 -mt-3"
          onPress={() => setIsChecked17(!isChecked17)} // Toggle state
        >
          {isChecked17 && (
            <MaterialIcons name="check" size={8} color="white" /> // Add check icon
          )}
        </TouchableOpacity>
      </View>
            <View className="flex flex-row items-center  bg-[#EDF0EF] p-2 rounded-md mt-2">
             <Text className="text-[7px] font-bold  w-[120px] ">7: Preventative Food-defence Procedures</Text>
                <ImageBackground
                   source={icon1}
                   className=" w-4 h-4 overflow-hidden "
                 />
         </View>
         <View>
        <Text className="text-[7px] w-[166px] mt-1">
          Each production area is clearly defined and coded to enable traceability in the event of a recall.
        </Text>
        <TouchableOpacity
          style={[
            styles.checkbox,
            isChecked18 && styles.checked, // Apply checked styles
          ]}
                 className="ml-20 -mt-3"
          onPress={() => setIsChecked18(!isChecked18)} // Toggle state
        >
          {isChecked18 && (
            <MaterialIcons name="check" size={8} color="white" /> // Add check icon
          )}
        </TouchableOpacity>
      </View>
        
      
     </View>

 </View>
</View>
</View>

    </ScrollView>
    
  );
};
const styles = StyleSheet.create({
  checkbox: {
    width: 12,
    height: 12,
    marginBottom:'1',
    borderWidth: 2,
    borderColor: '#008000', // Green border
    justifyContent: 'center',
    alignItems: 'center',
  },
  checked: {
    backgroundColor: '#008000', // Green background
  },
  tick: {
    color: '#fff', // White tick
  },
});

export default FoodSafetyAssessment;
