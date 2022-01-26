import React from 'react';
import { View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';
import { 
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
 } from 'react-native-paper';

import { AuthContext } from '../components/context';

export function DrawerContent(props) {

    const [isDarkTheme, setIsDarkTheme] = React.useState(false);

    const { signOut } = React.useContext(AuthContext);

    const toggleTheme = () => {
      setIsDarkTheme(!isDarkTheme);
    }

    return(
        <View style={{ flex:1 }}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                      <View style={{flexDirection:'row', marginTop: 15}}>
                        <Avatar.Image
                          source={{
                              uri: 'https://t8j5n5j3.rocketcdn.me/wp-content/uploads/2019/09/gato-preto-13-curiosidades-intrigantes-que-voce-nao-sabe-sobre-eles.jpg'
                          }}
                          size={50}
                        />
                        <View style={{flexDirection:'column', marginLeft: 15}}>
                          <Title style={styles.title}>Carolina Justen</Title>
                          <Caption style={styles.caption}>@caroljusten</Caption>
                        </View>
                      </View>
                        <View style={styles.row}>
                          <View style={styles.section}>
                            <Paragraph style={styles.paragraph, styles.section}>150</Paragraph>
                            <Caption style={styles.caption}>Seguindo</Caption>
                          </View>
                          <View style={styles.section}>
                            <Paragraph style={styles.paragraph, styles.section}>63</Paragraph>
                            <Caption style={styles.caption}>Seguidores</Caption>
                          </View>
                        </View>          
                    </View>

                    <Drawer.Section style={styles.drawerSection}>
                      <DrawerItem
                        icon={({color, size}) => (
                          <Icon
                          name="home"
                          color={color}
                          size={size}
                          />
                          )}
                        label="Home"
                        onPress={() => {props.navigation.navigate('Home')}}
                      />
                      <DrawerItem
                        icon={({color, size}) => (
                          <Icon
                          name="notification"
                          color={color}
                          size={size}
                          />
                          )}
                        label="Notificações"
                        onPress={() => {props.navigation.navigate('Notifications')}}
                      />
                      <DrawerItem
                        icon={({color, size}) => (
                          <Icon
                          name="profile"
                          color={color}
                          size={size}
                          />
                          )}
                        label="Meu Perfil"
                        onPress={() => {props.navigation.navigate('Profile')}}
                      />
                      <DrawerItem
                        icon={({color, size}) => (
                          <Icon
                          name="setting"
                          color={color}
                          size={size}
                          />
                          )}
                        label="Opções"
                        onPress={() => {props.navigation.navigate('Options')}}
                      />
                    </Drawer.Section>
                    <Drawer.Section title='Preferencias'>
                      <TouchableRipple onPress={() => {toggleTheme()}}>
                        <View style={styles.preference}>
                          <Text>Modo Escuro</Text>
                          <View pointerEvents='none'>
                            <Switch value={isDarkTheme}/>
                          </View>  
                        </View>
                      </TouchableRipple>
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem
                    icon={({color, size}) => (
                        <Icon
                        name="logout"
                        color={color}
                        size={size}
                        />
                    )}
                    label="Sair"
                    onPress={() => {signOut()}}
                />
            </Drawer.Section>
        </View>    
    );
}

export default DrawerContent;

const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      paddingLeft: 20,
    },
    title: {
      fontSize: 16,
      marginTop: 3,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
  });