import React, { useState } from 'react'
import firebase from '../../firebase'
import { KeyboardAvoidingView, StyleSheet, View } from 'react-native'
import { Icon, Text } from 'native-base'
import { Link, withRouter } from 'react-router-native'
import { connect } from 'react-redux'

import { signUpDisplayName } from '../../actions'

function About(props) {
  return (
    <KeyboardAvoidingView style={styles.inputContainer} behavior='padding'>
      <Link onPress={() => props.history.goBack()} style={styles.link}>
        <Icon name='arrow-back' color='green' style={styles.backButton} />
      </Link>
      <View style={styles.pageView}>
        <Text style={styles.header}>Councils v.1.0</Text>
        <View style={styles.contentDivs}>
          <Text style={styles.subHeader}>Terms of Use</Text>
          <Text style={styles.textContent}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            nunc tellus, convallis pharetra condimentum eu, sodales eget magna.
            Maecenas auctor eget diam ac efficitur. Praesent et rhoncus erat, eu
            consequat.
          </Text>
        </View>
        <View style={styles.contentDivs}>
          <Text style={styles.subHeader}>Privacy Policy</Text>
          <Text style={styles.textContent}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            nunc tellus, convallis pharetra condimentum eu, sodales eget magna.
            Maecenas auctor eget diam ac efficitur. Praesent et rhoncus erat, eu
            consequat.
          </Text>
        </View>
        <View style={styles.contentDivs}>
          <Text style={styles.subHeader}>Contact</Text>
          <Text style={styles.contactContent}>Email: info@councils.io</Text>
          <Text style={styles.contactContent}>Web: councils.io</Text>
        </View>
      </View>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    height: '100%'
    // flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center'
  },
  link: {
    position: 'absolute',
    top: 25,
    left: 5,
    width: '100%',
    height: 50
  },
  backButton: {
    fontSize: 24,
    marginLeft: 20
  },
  pageView: {
    marginHorizontal: 20,
    marginTop: 80
  },
  header: {
    fontSize: 28,
    marginBottom: 10,
    fontFamily: 'gotham',
    fontWeight: '500'
  },
  subHeader: {
    fontSize: 17,
    fontWeight: '500',
    fontFamily: 'bern-r'
  },
  textContent: {
    fontSize: 17,
    fontFamily: 'bern-r'
  },
  contentDivs: {
    marginVertical: 10,
    lineHeight: 24
  },
  contactContent: {
    marginVertical: 10,
    fontSize: 17,
    fontFamily: 'bern-r',
    lineHeight: 24
  }
})

export default withRouter(About)
