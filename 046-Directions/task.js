export const dirReduc = (directions) => {
    const oppositeDirections = {
        NORTH: 'SOUTH',
        SOUTH: 'NORTH',
        WEST: 'EAST',
        EAST: 'WEST',
    };

    const optimizedDirections = [];
    for (let i = 0; i < directions.length; i++) {
        // eslint-disable-next-line max-len
        if (optimizedDirections.length > 0 && optimizedDirections[optimizedDirections.length - 1] === oppositeDirections[directions[i]]) {
            optimizedDirections.pop();
        } else {
            optimizedDirections.push(directions[i]);
        }
    }

    return optimizedDirections;
};

console.log(dirReduc(['NORTH', 'SOUTH', 'SOUTH', 'EAST', 'WEST', 'NORTH', 'WEST']));
