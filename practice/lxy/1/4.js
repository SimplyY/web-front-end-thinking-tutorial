/**
 * Created by Administrator on 2016/4/3.
 */
function  spacify(aa) {
    var bb=Array.from(aa) // string to arry

    for(var i=1,len=bb.length;i<len;)
    {
        if(bb[i]!='') //若bb[i]不是空格，则将bb[i]往后的元素都后移一位（包括bb[i]）,然后将元素空格插入bb[i]的位置
        {
            for(var t=len-1;t>=i;t--)
             bb[t+1]=bb[t]

            bb[i]=' '
            len=len+1
            i=i+2
        }
        if(bb[i]==' ')
            i=i+2
    }

     cc=bb.join('')//arry to string
    console.log(cc)

}
spacify('helloworld')
spacify('hello world')
spacify('he llo worl d')