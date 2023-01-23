module.exports = function check(str, bracketsConfig) {
    let union_bracket = bracketsConfig.map((item) => {
        return `${item[0]}${item[1]}`;
    });

    let str_len_beg = str.length;

    while (str.length) {
        union_bracket.forEach((item) => {
            str = str.replace(item, "");
        });

        if (str.length === str_len_beg) {
            return false;
        }

        str_len_beg = str.length;
    }

    return true;
}
