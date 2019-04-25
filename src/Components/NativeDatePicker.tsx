import React from 'react'
import {
    DatePickerAndroid,
    DatePickerIOS,
    Platform,
    Text,
    TouchableOpacity,
    Modal,
    View,
    StyleSheet,
    ViewPropTypes,
    Button
} from 'react-native'
import PropTypes from 'prop-types'
import NativeControl from "../Interfaces/NativeControl";

const isAndroid = Platform.OS === 'android'

function noop () {}

export interface DatePickerProps extends NativeControl {

    required: boolean;

    calendarImageUrl: string,

    disabledDates: Date[],

    disabledDatesCssClass: string,

    disableWeekends: boolean,

    placeholder: string,

    leadTime: number,

    dateFormat: string,

    buttonText: string,

    displayNumberOfMonths: number,
    canChangeYear: boolean,
    //TODO --------------------------
    renderDate: ()=> void,
    startDate: Date,
    onError: (error) => void,
    onDateChanged: (date)=> void,
    minDate: Date,
    maxDate: Date,
    modalButtonText: string,
    modalOverlayStyle: {},
    modalStyle: {},
    modalButtonStyle: {},
    modalBtnContainer: {},
    style: {}
s}
class NativeDatePicker extends React.Component<DatePickerProps> {
    state = {
        showIOSModal: false,
        date: undefined
    }

    static defaultProps = {
        renderDate: ({ year, month, day, date }) => {
            if (date) {
                const str = `${month}-${day}-${year}`
                return <Text>{str}</Text>
            }

            return null
        },
        startDate: new Date(),
        onError: noop,
        onDateChanged: noop,
        maxDate: undefined,
        minDate: undefined,
        modalButtonText: 'Done'
    }

    handlePressed = async () => {
        const { startDate, onError } = this.props
        const { date } = this.state

        if (isAndroid) {
            try {
                const { action, year, month, day } = await DatePickerAndroid.open({
                    date: date || startDate
                })

                const newDate = new Date(year, month, day)
                if (action !== DatePickerAndroid.dismissedAction) {
                    this.setState(() => ({ date, startDate: date }))
                    this.props.onDateChanged(this.getDateObj())
                }
            } catch (error) {
                onError(error)
            }
        } else {
            this.setState(() => ({ showIOSModal: true }))
        }
    }

    getDateObj = () => {
        const { date } = this.state

        return {
            date,
            year: date ? date.getFullYear() : '',
            day: date ? `${date.getDate()}`.padStart(2, '0') : '',
            month: date ? `${date.getMonth() + 1}`.padStart(2, '0') : ''
        }
    }

    handleModalClose = () => {
        this.setState(
            () => ({ showIOSModal: false }),
            () => {
                const { onDateChanged } = this.props
                onDateChanged(this.getDateObj())
            }
        )
    }

    handleDateChange = date => this.setState({ date, startDate: date })

    render () {
        const { showIOSModal, date } = this.state

        const {
            startDate,
            maxDate,
            minDate,
            modalButtonText,
            renderDate,
            modalOverlayStyle,
            modalStyle,
            modalButtonStyle,
            modalBtnContainer,
            style,
            ...props
        } = this.props

        return (
            <TouchableOpacity style={style} onPress={this.handlePressed}>
                <Modal
                    animationType='slide'
                    transparent
                    visible={showIOSModal}
                    onRequestClose={this.handleModalClose}
                >
                    <View style={[styles.overlay, modalOverlayStyle]}>
                        <View style={[styles.modal, modalStyle]}>
                            <View style={[styles.modalBtnContainer, modalBtnContainer]}>
                                <Button
                                    style={[modalButtonStyle]}
                                    title={modalButtonText}
                                    onPress={this.handleModalClose}
                                />
                            </View>
                            <DatePickerIOS
                                mode='date'
                                date={date || startDate}
                                onDateChange={this.handleDateChange}
                                maximumDate={maxDate}
                                minimumDate={minDate}
                                {...props}
                            />
                        </View>
                    </View>
                </Modal>
                {renderDate(this.getDateObj())}
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,.3)',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    modal: { backgroundColor: '#fff', height: 260, width: '100%' },
    modalBtnContainer: {
        width: '100%',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        paddingHorizontal: 15,
        marginTop: 15
    }
})

export default NativeDatePicker
