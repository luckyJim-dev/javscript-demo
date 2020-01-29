const mixed = function(name1, name2, ...names) {
    console.log('name1: ' + name1);     // Tom
    console.log('name2: ' + name2);     // Jerry
    console.log('names: ' + names);     // Tyke,Spike
    };
mixed('Tom', ...['Jerry', 'Tyke', 'Spike']);