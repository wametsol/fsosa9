interface BmiValues {
    n1: number;
    n2: number;
}

const calculateBmi = (h: number, w: number) => {
    const bmi = w/((h/100)*(h/100));
    if (bmi<15) return 'Very severely underweight';
    if (bmi<16) return 'Severely underweight';
    if (bmi<18.5) return 'Underweight';
    if (bmi<25) return 'Normal (healthy weigth)';
    if (bmi<30) return 'Overweight';
    if (bmi<35) return 'Obese Class 1';
    if (bmi<40) return 'Obese Class 2';
    if (bmi>40) return 'Obese Class 3';
    return '';
};

const parseBmiArguments = (args: Array<string>): BmiValues => {
    if (args.length < 4) throw new Error('Not enough arguments');
    if (args.length > 4) throw new Error('Too many arguments');

    if(!isNaN(Number(args[2])) && !isNaN(Number(args[3]))) {
        return {
            n1: Number(args[2]),
            n2: Number(args[3])
        };
    } else {
        throw new Error('Provided values were not numbers!');
    }
};
try {
    const { n1, n2 } = parseBmiArguments(process.argv);
    console.log(calculateBmi(n1, n2));
} catch (e) {
    console.log('Error, something bad: ', e.message);
}

export { calculateBmi };
