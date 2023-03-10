// I had to manually reverse this code, it was a bit tough at first but it was good practice
//We have this string _flag that we can guess its value so that it checks all those conditions
//The approach I chose was to use another js file and start testing the conditions one by one
//note: substr and substring don't have the same behaviour
flag = (_flag) => 
  {
    //they gave us the first 6 characters in this conditions 
    if (_flag.substr(0, 6) == 'CTF{cl') {
      //the replace methods here are just to confuse you, and we got the 7 characters starting char8
      if (_flag.substring(8, 15).replace('a', '2').replace('2', 'a') =='nt_s1d3') {
        //the reverse algorithm for this is to same: split/reverse/join the string '31' which results in '13'; thus the 6th and 7th characters here are '13'
        if (_flag.substring(6, 8).split('').reverse().join('') == '31') {
          //the replace method does nothing since we don't have any empty characters, and slices ignores the first character. more or less we got our 10 characters starting char15
          if (_flag.substr(15, 10).replace('', 'a').slice(1) == '_passw0rds') {
            //we simply replace back 'a3' with '_3' in the string
            if (_flag.substr(45, 6).replace('_3', 'a3') == 'a33f19') {
              //replace '3' with '9'
              if (_flag.substr(35, 4).replace(/9/, '3') == '349a') {
                //substring method here basically returns the original string it took
                if (_flag.substring(30, 35).substring(0) == 'b4d_3') {
                  //This is the last substring inside our flag string
                  if (_flag.substring(51, 59) == '999}') {
                    //reverse this by removing the @ from the string and reversing the characters positions
                    if (_flag.substr(39, 6).split('').reverse().join('@') =='1@d@9@2@_@4') {
                      //revert the character positions 
                      if (_flag.substr(25, 3).replace(/_/, '_').split('').reverse().join('') == 'ra_') {
                        //this condition always returns true
                        if (true || _flag.substring(51, 5) == '33') {
                          //and this is the last substring in flag
                          if (_flag.substring(28, 30) == '3_') {
                            return true
                            //which leaves us with this string CTF{cl13nt_s1d3_passw0rds_ar3_b4d_3949a4_29d1_33f19999}
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    return false
  }

  document[_0x3e69dd(137)](_0x3e69dd(141)).onsubmit = () => {
    var _0x2990c5 = _0x3e69dd
    return (
      flag(document[_0x2990c5(137)](_0x2990c5(134))[_0x2990c5(130)])
        ? alert(_0x2990c5(142))
        : alert(_0x2990c5(140)),
      false
    )
  }
//CTF{cl13nt_s1d3_passw0rds_ar3_b4d_3949a4_29d1_33f19999}
//0123456789012345678901234567890123456789012345678901234567890
//0_________1_________2_________3_________4_________5_________6