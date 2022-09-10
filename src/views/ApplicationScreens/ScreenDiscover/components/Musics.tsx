import React, {Component, PureComponent} from 'react';
import {StyleSheet, Alert} from 'react-native';
import {gestureHandlerRootHOC} from 'react-native-gesture-handler';
import {Colors, ListItem, Text, Avatar, AvatarHelper, Drawer, Button, View, Card, Spacings} from 'react-native-ui-lib';
import _ from 'lodash';
import PropTypes from 'prop-types';

import {Devices, MusicItem} from "~commons"; //eslint-disable-line

const conversations: MusicItem[] = [
    {
        title: 'Đế Vương',
        artis: 'Đình Dũng',
        length: '04:00',
        thumbnail: 'https://i.pravatar.cc/150?img=1',
        id: 1,
    },
    {
        title: 'Thương nhau tới bến',
        artis: 'Nguyễn Đình Vũ',
        length: '04:00',
        star: 5,
        thumbnail: 'https://i.pravatar.cc/150?img=2',
        id: 2,
    },
    {
        title: 'Cafe không đường',
        artis: 'This might be the subject\nAnd the content is on a new line',
        length: '04:00',
        star: 1,
        thumbnail: 'https://i.pravatar.cc/150?img=3',
        id: 3,
    },
    {
        title: 'Lữ khách qua thời gian',
        artis: 'Yep',
        length: '04:00',
        star: 12,
        thumbnail: 'https://i.pravatar.cc/150?img=4',
        id: 4,
    },
];

const collectionsIcon = require('../../../../assets/icons/collections.png');
const starIcon = require('../../../../assets/icons/star.png');
const shareIcon = require('../../../../assets/icons/share.png');
const batchSize = 10;

class Musics extends Component {

    constructor(props) {
        super(props);

        this.lastIndex = undefined;
        this.refArray = [];
        this.batchCounter = 0;

        this.state = {
            items: this.createItems({min: 0, max: batchSize}),
        };
    }

    createItems(batch) {
        const data = conversations.slice(batch.min, batch.max);

        const map = _.map(data, (item, index) => {
            const initials = AvatarHelper.getInitials(item.name);
            const avatarBadgeProps = {backgroundColor: Number(index) < 3 ? Colors.green30 : undefined};
            const buttonPress = () => Alert.alert('Badge button press');
            const listOnPress = () => Alert.alert(`Pressed on contact #${index + 1}`);
            const imageSource = item.thumbnail ? {uri: item.thumbnail} : null;
            const rightButtons = [
                {
                    text: 'More',
                    icon: shareIcon,
                    background: Colors.grey60,
                    onPress: () => Alert.alert(`More button pressed for item #${item.title}`),
                },
                {
                    text: 'Archive',
                    icon: collectionsIcon,
                    background: Colors.blue30,
                    onPress: () => Alert.alert(`Archive button pressed for item #${item.title}`),
                },
            ];
            const leftButton = {
                text: 'Read',
                icon: starIcon,
                background: Colors.green30,
                onPress: () => Alert.alert(`Read button pressed for item #${item.title}`),
            };

            return {
                ...item,
                initials,
                avatarBadgeProps,
                buttonPress,
                listOnPress,
                imageSource,
                rightButtons,
                leftButton,
            };
        });

        return map;
    }

    getNewItems() {
        this.batchCounter++;
        const newItems = this.createItems({
            min: batchSize * this.batchCounter,
            max: batchSize + (batchSize * this.batchCounter),
        });
        const items = _.concat(this.state.items, newItems);
        this.setState({items});
    }

    closeLast(index) {
        if (this.lastIndex !== undefined && this.lastIndex !== index) {
            this.closeDrawer(this.lastIndex);
        }
        this.lastIndex = index;
    }

    closeDrawer(index) {
        this.refArray[index].closeDrawer();
    }

    addRef = (ref, index) => {
        this.refArray[index] = ref;
    }

    onEndReached = () => {
        this.getNewItems();
    }

    onSwipeableWillOpen = (props) => {
        this.closeLast(props.index);
    }

    renderItem = ({item, index}) => {
        return <ContactItem item={item} index={index} addRef={this.addRef}
                            onSwipeableWillOpen={this.onSwipeableWillOpen}/>
    }

    keyExtractor = (item, index) => `${item.name}-${index}`;

    render() {
        return (
            <View style={styles.container}>
                <View marginH-s4 marginB-s4>
                    <Text heading marginB-s2>Ca khúc mới</Text>
                    <Card flex-1 paddingH-s2 paddingV-s2 borderRadius={12}>

                        {this.state.items.map((item, index) => <ContactItem item={item} index={index}
                                                                            addRef={this.addRef}
                                                                            onSwipeableWillOpen={this.onSwipeableWillOpen}
                                                                            key={this.keyExtractor(item, index)}/>)}

                    </Card>
                </View>
            </View>
        );
    }
}

class ContactItem extends PureComponent {
    static propTypes = {
        item: PropTypes.object,
        index: PropTypes.number,
        addRef: PropTypes.func,
        onSwipeableWillOpen: PropTypes.func,
    }

    render() {
        const {item, index, addRef, onSwipeableWillOpen} = this.props;

        return (
            <Drawer
                leftItem={item.leftButton}
                rightItems={item.rightButtons}
                // itemsMinWidth={80}
                ref={r => addRef(r, index)}
                index={index} // sent for the 'closeLast' functionality
                onSwipeableWillOpen={onSwipeableWillOpen} // sent for the 'closeLast' functionality
            >
                <ListItem
                    height={75.8}
                    onPress={item.listOnPress}
                >
                    <ListItem.Part left>
                        <Avatar
                            size={54}
                            source={item.imageSource}
                            label={item.initials}
                            badgeProps={item.avatarBadgeProps}
                            containerStyle={styles.avatar}
                        />
                    </ListItem.Part>
                    <ListItem.Part middle column containerStyle={styles.border}>
                        <ListItem.Part containerStyle={styles.middle}>
                            <Text style={styles.text} text70 color={Colors.grey10} numberOfLines={1}>{item.title}</Text>
                            <Text style={styles.subtitle} text90 color={Colors.grey50}>{item.length}</Text>
                        </ListItem.Part>
                        <ListItem.Part>
                            <Text style={styles.text} text80 color={Colors.grey40} numberOfLines={1}>{item.artis}</Text>
                            {item.star > 0 && <Button size={'small'} label={item.star} onPress={item.buttonPress}/>}
                        </ListItem.Part>
                    </ListItem.Part>
                </ListItem>
            </Drawer>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: Devices.width,
    },
    border: {
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderColor: Colors.grey70,
        paddingRight: Spacings.s2,
        paddingLeft: Spacings.s2,
    },
    avatar: {
        marginHorizontal: Spacings.s2,
    },
    middle: {
        marginBottom: 3,
    },
    text: {
        flex: 1,
        marginRight: Spacings.s2,
    },
    subtitle: {
        marginTop: 2,
    },
});

export default gestureHandlerRootHOC(Musics);
