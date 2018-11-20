import RNFetchBlob from 'react-native-fetch-blob';
const upload = (data) => (
    RNFetchBlob.fetch('POST', 'http://192.168.0.103:3000', {
            Authorization: "Bearer access-token",
            otherHeader: "foo",
            'Content-Type': 'multipart/form-data',
        },data)
           
);

module.exports = upload;