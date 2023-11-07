export const computePositions = (number, games) => {
    const teams = [];
    for (let i = 0; i < number; i++) {
        teams.push({
            teamNumber: i,
            points: 0,
            scoringDiff: 0,
            goalsScored: 0,
        });
    }
    const positions = Array.from({ length: number }, (_, i) => i + 1);
    // eslint-disable-next-line no-restricted-syntax
    for (const game of games) {
        const [teamA, teamB, goalA, goalB] = game;
        teams[teamA].goalsScored += goalA;
        teams[teamA].scoringDiff += goalA - goalB;
        teams[teamB].goalsScored += goalB;
        teams[teamB].scoringDiff += goalB - goalA;
        if (goalA > goalB) {
            teams[teamA].points += 2;
        } else if (goalA < goalB) {
            teams[teamB].points += 2;
        } else {
            teams[teamA].points += 1;
            teams[teamB].points += 1;
        }
    }
    teams.sort((a, b) => {
        if (a.points !== b.points) {
            return b.points - a.points;
        }
        if (a.scoringDiff !== b.scoringDiff) {
            return b.scoringDiff - a.scoringDiff;
        }

        return b.goalsScored - a.goalsScored;
    });
    let rank = 1;
    for (let i = 0; i < number; i++) {
        if (i > 0 && (
            teams[i].points !== teams[i - 1].points
        || teams[i].scoringDiff !== teams[i - 1].scoringDiff
        || teams[i].goalsScored !== teams[i - 1].goalsScored
        )) {
            rank = i + 1;
        }
        positions[teams[i].teamNumber] = rank;
    }
    return positions;
};
console.log(
    computePositions(10, []),
);
