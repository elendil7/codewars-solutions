class Solution {
    public static String whoLikesIt(String... a) {
        System.out.println(a);
        if(a.length==1) return String.format("%s likes this",a[0]);
        if(a.length==2) return String.format("%s and %s like this", a[0],a[1]);  
        if(a.length==3) return String.format("%s, %s and %s like this",a[0],a[1],a[2]);
        if(a.length>=4) return String.format("%s, %s and %s others like this",a[0],a[1],String.valueOf(a.length-2));
        return "no one likes this";
    }
}
