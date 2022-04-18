class FileNameExtractor {
    static extractFileName (d) {
        return d.split`.`[0].split`_`.slice(1).join`_` + `.` + d.split`.`[1]
    }
}
