export default class Utils {
    static file;
    static keyName;
    static resume;
    static resumeKey;
    static setFile(n, f){
        this.file = f;
        this.keyName = n;
    }
    static getFile(){
        return this.file;
    }
    static getName(){
        return this.keyName;
    }
    static setResume(name, resumeFile){
        this.resume = resumeFile;
        this.resumeKey = name;
    }
    static getResumeFile(){
        return this.resume;
    }
    static getResumeName(){
        return this.resumeKey;
    }
}