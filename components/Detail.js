import { StyleSheet, Text, View, } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import React from 'react'
import { Image, LinearProgress} from "@rneui/themed";
import { useNavigation }  from '@react-navigation/native';
import { ImageBackground } from 'react-native-web';
import Icon from 'react-native-vector-icons/FontAwesome';


const Detail = ({route}) => {

    const navigation = useNavigation();

    const { item } = route.params;
    

  return (
    <View>
      
      {/* HeaderView */}
      <View style={styles.header} >
            <Icon
                style={styles.detailIconAngle}
                name="angle-left"
                type=""
                size={35}
                color="white"
                onPress={() => navigation.navigate('Home')}/>

            

            

      </View>

      <Text style={styles.detailHeaderText}>{item.titre}</Text>
      <Text style={styles.DetailViewText} > {item.nom} </Text>

                <Image
                      source={item.image}
                      resizeMode="cover"
                      style={styles.image}
                      />

      {/* NavBar */}
      <View style={styles.navBar}>

          <Icon
              style={styles.detailIconBack}
              name="backward"
              type=""
              size={15}
              color="black"
              />

          <Icon
              style={styles.detailIconPause}
              name="pause"
              type=""
              size={15}
              color="black"
              />
          
          <Icon
              style={styles.detailIconPlay}
              name="play"
              type=""
              size={15}
              color="black"
              />

          <Icon
              style={styles.detailIconSquare}
              name="square-o"
              type=""
              size={15}
              color="black"
              />

          <Icon
              style={styles.detailIconRest}
              name="window-restore"
              type=""
              size={15}
              color="black"
              />

                
      </View>   

      <Text style={styles.DetailViewDescription} > {item.description}</Text>
  
    </View>
  )
}

export default Detail

const styles = StyleSheet.create({

  header: {
    height: 55,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'rgb(64,196,255)',
  },

  detailIconAngle:{
    marginLeft: 10,
    marginTop: 10,
  },

  detailHeaderText:{
    marginTop:10,
    marginLeft:28,
    fontSize:25,
    color:'rgb(64,196,255)',
  },

  DetailView:{
    color:'rgb(225,226,225)',
  },

  DetailViewText:{
    /* justifyContent: 'center', */
    fontSize:20,
    fontWeight:'600',
    color:'rgb(41,182,246)',
    marginTop:20,
    marginLeft:25,
    marginRight:25,
    
  },

  image:{
    height: 250,
    width: 350,
    marginTop:20,
    marginLeft: 30,
  },

  DetailViewDescription:{
    fontSize:15,
    color:'black',
    marginTop:20,
    marginLeft:25,
    marginRight:20,
    color:'rgb(3,169,244)',
  },
  
  navBar:{
    height: 35,
    width: 350,
    marginLeft:30,
    marginRight:30,
    paddingTop:10,
    paddingLeft:5,
    paddingBottom:5,
    flexDirection:'row',   
    backgroundColor:'rgb(79,195,247)',
  },

  detailIconBack:{
    marginLeft:10,
    color:'rgb(225,226,225)',
  },

  detailIconPause:{
    marginLeft:10,
    color:'rgb(225,226,225)',
  },

  detailIconPlay:{
    marginLeft:10,
    color:'rgb(225,226,225)',
  },

  detailIconSquare:{
    marginLeft:220,
    color:'rgb(225,226,225)',
  },

  detailIconRest:{
    marginLeft:10,
    color:'rgb(225,226,225)',
  },


 

  
})