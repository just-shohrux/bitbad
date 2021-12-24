class Utils {
    static phoneNumberHide = (phone) => {
        return `+${
            phone[0]
        }${
            phone[1]
        }${
            phone[2]
        }** *** ** ${
            phone[10]
        }${
            phone[11]
        }`;
    };
}

export default Utils;
