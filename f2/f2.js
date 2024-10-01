const students = require('../students.json');
/* Írj függvényt ami feltölt egy objektumot (lehetőleg üres {}-ről induljon) 
a klubbok nevével és tagjainak számával. (pl. {"club1": 4, "club2": 3....}) */
function f2() {
    let club = {};
    students.forEach(student => {
        if (!club[student.club]) {
            club[student.club] = 1;

            
        }
        else{
            club[student.club]++;
        }
        
    })
    return club;
}


module.exports = f2;