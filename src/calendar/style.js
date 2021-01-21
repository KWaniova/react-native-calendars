import {StyleSheet} from 'react-native';
import * as defaultStyle from '../style';

const STYLESHEET_ID = 'stylesheet.calendar.main';

export default function getStyle(theme = {}) {
  const appStyle = {...defaultStyle, ...theme};
  return StyleSheet.create({
    container: {
      paddingLeft: 5,
      paddingRight: 5,
      backgroundColor: appStyle.calendarBackground
    },
    dayContainer: {
      flex: 1,
      alignItems: 'center'
    },
    emptyDayContainer: {
      flex: 1
    },
    monthView: {
      backgroundColor: appStyle.calendarBackground
    },
    week: {
      flex: 1,
      marginTop: 7,
      marginBottom: 7,
      flexDirection: 'row',
      justifyContent: 'center'
    },
    weekNumberStyle: {
      flex: 1,
      alignItems: 'center',
      paddingVertical: 10
    },
    weekNumberTextStyle: {
      color: 'grey',
      paddingVertical: 4
    },
    ...(theme[STYLESHEET_ID] || {})
  });
}
