import { View, Text, StyleSheet } from 'react-native';

import React, { useEffect, useMemo, useState } from 'react';
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime"
dayjs.extend(relativeTime);

const Message = ({ message, userID }) => {

    const isMyMessage = useMemo(() => message.senderID === userID, [message.senderID, userID]);


    return (
        <View style={[styles.container,
        {
            backgroundColor: isMyMessage ? '#AEC6FF' : 'white',
            alignSelf: isMyMessage ? 'flex-end' : 'flex-start',
        },
        ]}>
            <Text>{message.data}</Text>
            <Text style={styles.time}>{dayjs(message.createdAt).fromNow(true)}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        alignSelf: 'flex-end',

        margin: 4,
        padding: 10,
        borderRadius: 10,
        maxHeight: '80%',
    },
    time: {
        color: 'gray',
        alignSelf: 'flex-end',
    }
});

export default Message;