export const palette = {
    primary: '#333333',
    secondary: '#F4F4F4',
    tertiary: '#666666',
    brand: '#15AA6B',
    success: '#00a969',
    warning: '#ffce00',
    info: '#0A84FF',
    infoLight: '#53A8FF',
    error: '#FF453A',
    light: '#f5f5f5',
    dark: '#353535',
    medium: '#858585',
    mediumLight: '#e3e3e3',
    mediumDark: '#535353',
    white: '#fefefe',
    facebook: '#4267B2'
};

export const variables = {
    borderRadius: {
        xsmall: 8,
        small: 10,
        medium: 12,
        large: 14,
        xlarge: 16,
        xxlarge: 20,
        xxxlarge: 24,
        round: 9999
    },
    iconSizes: {
        small: 10,
        mediumSmall: 12,
        medium: 16,
        large: 20,
        xlarge: 24,
        xxlarge: 30,
        xxxlarge: 40
    }
};

export const spacing = {
    s0: 0,
    s1: 4,
    s2: 8,
    s3: 12,
    s4: 16,
    s5: 20,
    s6: 24,
    s7: 28,
    s8: 32,
    s9: 36
};

export const elementsStyle: Theme = {
    Button: {
        buttonStyle: {
            marginVertical: spacing.s1,
            borderRadius: variables.borderRadius.medium
        }
    },
    Text: {
        style: {
            color: palette.dark
        }
    },
    SearchBar: {
        containerStyle: {
            backgroundColor: palette.light,
            marginLeft: 8,
            marginRight: 8,
            marginTop: 5,
            borderTopWidth: 0,
            borderBottomWidth: 0,
            borderRadius: variables.borderRadius.medium
        },
        inputContainerStyle: {
            backgroundColor: palette.mediumLight,
            shadowColor: '#000',
            borderRadius: variables.borderRadius.medium,
            height: 45,
            paddingLeft: 5,
            paddingRight: 5
        },
        inputStyle: {
            fontSize: 14
        },
        cancelButtonProps: {
            color: palette.primary
        },
        style: {
            color: palette.dark,
            borderWidth: 0
        }
    },
    Input: {
        inputContainerStyle: {
            backgroundColor: palette.mediumLight,
            paddingLeft: 15,
            paddingRight: 15,
            padding: 5,
            borderRadius: variables.borderRadius.medium,
            borderBottomColor: 'rgba(0,0,0,0)'
        },
        style: {
            color: palette.dark
        },
        containerStyle: {
            paddingHorizontal: 5
        },
        errorStyle: {},
        placeholderTextColor: palette.medium
    },
    ListItem: {
        titleStyle: {
            color: palette.dark
        }
    },
    colors: {
        primary: palette.primary,
        secondary: palette.secondary,
        disabled: palette.medium,
        success: palette.success,
        warning: palette.warning,
        error: palette.error
    }
};
