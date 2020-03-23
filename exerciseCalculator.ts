interface ExValues {
    t1: number;
    a1: Array<number>;
}

const parseExArguments = (args: Array<string>): ExValues => {
    if (args.length < 4) throw new Error('EX : Not enough arguments');
    let array: number[] = [];
    for(let i = 3; i<args.length;i++){
        if (!isNaN(Number(args[2])) && !isNaN(Number(args[i]))){
            array = array.concat(Number(args[i]));
        } else {
            throw new Error('Provided values were not numbers!');
        }
    }
    

    return {
        t1: Number(args[2]),
        a1: array
    };
};

const exerciseCalculator = (a: Array<number>, target: number) => {
    let td = 0;
    let avg = 0;
    a.map(b => {
        if (b>0){
            td++;
        }
        avg += b/a.length;
    });
    let rD = '';
    let r = 0;
    if (avg>=target){
        if (avg-target>0.5){
            rD ='super good';
            r = 3;
        } else {
            rD = 'target met';
            r = 2;
        }
    } else {
        if (target-avg>0.5){
            rD ='bad, needs improvement';
            r = 1;
        } else {
            rD = 'not too bad, but could be better';
            r = 2;
        }
    }
    const result = {
        periodLength: a.length,
        trainingDays: td,
        success: (avg>target) ? true : false,
        rating: r,
        ratingDescription: rD,
        target: target,
        average: avg
    };

    return result;
};

try{
    const { t1, a1 } = parseExArguments(process.argv);
    console.log('ARRAY: ', a1);
    console.log(exerciseCalculator(a1, t1));
} catch (e) {
    console.log('Error: ', e.message);
}

export { exerciseCalculator };
