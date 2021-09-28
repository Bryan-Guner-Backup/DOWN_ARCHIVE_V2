import React, { useState } from 'react';
import { DropzoneDialog } from 'material-ui-dropzone';
import { CircularProgress } from '@material-ui/core';
import Button from '@material-ui/core/Button';
const firebase = require('firebase/app');
require('firebase/storage');

const DropZone = props => {
  //state hooks
  const [isOpen, setIsOpen] = useState(false);
  const [files, setFiles] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleSave = data => {
    //Get file
    let file = data[0];

    // Get current username
    var user = firebase.auth().currentUser;

    //close modal
    setIsOpen(false);

    //Saving files to state for modal purposes
    setFiles(file);

    // 1. Create storage reference
    // Create a Storage Ref w/ username
    var storageRef = firebase
      .storage()
      .ref(user + '/profilePicture/' + file.name);

    //2.Upload file to firebase
    var task = storageRef.put(file);

    //3.Update progress bar
    task.on(
      'state_changed',
      function progress(snapshot) {
        //loading
        setIsLoading(true);
        //create percentage to set progress bar
        var percentage =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(percentage);
      },
      function erro(error) {
        setIsLoading(false);
        console.log(error);
      },

      function() {
        setIsLoading(false);
        // Upload completed successfully, now we can get the download URL
        task.snapshot.ref.getDownloadURL().then(function(downloadURL) {
          //update user profile picture
          user
            .updateProfile({
              photoURL: downloadURL
            })
            .then(function() {
              console.log('User Profile Pic updated');
              props.history.push('/dashboard');
            })
            .catch(function(error) {
              console.log('Error while updating user profile pic', error);
            });
        });
      }
    );
  };

  return (
    <div>
      {isLoading ? (
        <CircularProgress variant="static" value={progress} />
      ) : (
        <Button onClick={() => setIsOpen(true)}>Upload Picture</Button>
      )}
      <DropzoneDialog
        open={isOpen}
        onSave={handleSave}
        acceptedFiles={['image/jpeg', 'image/png']}
        showPreviews={true}
        maxFileSize={5000000}
        onClose={() => setIsOpen(false)}
        file={files}
      />
    </div>
  );
};

export default DropZone;
