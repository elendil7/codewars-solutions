def longest(s):
    if len(s) <= 1:
        return s
    
    alphabet = list("abcdefghijklmnopqrstuvwxyz")
    temp = ""
    maxStr = ""
    
    for idx, x in enumerate(s):
        if idx + 1 == len(s):
            if(len(temp) > 0):
                if(alphabet.index(temp[-1]) <= alphabet.index(x)):
                    temp = temp + x
                if len(maxStr) < len(temp):
                    maxStr = temp
            break
        if alphabet.index(x) <= alphabet.index(s[idx+1]):
            temp = temp + x
        else:
            temp = temp + x
            if len(maxStr) < len(temp):
                maxStr = temp
            temp = ""
        
    return maxStr
