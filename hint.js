class PuzzleSolver{
    constructor(default_matrix, current_matrix, current_pos, size){
        this.current_matrix = current_matrix;
        this.default_matrix = default_matrix;
        this.current_pos = current_pos;
        this.size = size;
        this.queue = [];
        this.MAX_MOVES = 1000;
        this.number_of_moves = 0;
        this.NULL_PIECE_INDEX = size * size; 
    }

    get_possible_move(){
        var q = [];
        if (this.current_pos.x < this.size - 1)
            q.push({
                x: this.current_pos.x + 1,
                y: this.current_pos.y,
                g: this.number_of_moves,
            });
        if (this.current_pos.y < this.size - 1)
            q.push({
                x: this.current_pos.x,
                y: this.current_pos.y + 1,
                g: this.number_of_moves,
            });
        if (this.current_pos.x > 0)
            q.push({
                x: this.current_pos.x - 1,
                y: this.current_pos.y,
                g: this.number_of_moves,
            });
        if (this.current_pos.y > 0)
            q.push({
                x: this.current_pos.x,
                y: this.current_pos.y - 1,
                g: this.number_of_moves,
            });
        return q;
    }

    get_position(val){
        for (i = 0; i < this.size; ++i){
            for (j = 0; j < this.size; ++j){
                if (this.current_matrix[i][j] == val) return {x: i, y: j};
            }
        }
    }

    calculate_move(temp_pos){
        let move = 0;
        let temp_matrix = this.current_matrix.map((x) => [...x]);
        [temp_matrix[temp_pos.x][temp_pos.y], temp_matrix[this.current_pos.x][this.current_pos.y]]
        = [temp_matrix[this.current_pos.x][this.current_pos.y], temp_matrix[temp_pos.x][temp_pos.y]];
        var map_index = new Map();
        for (i = 0; i < this.size; i++) {
            for (j = 0; j < this.size; j++) {
                map_index.set(temp_matrix[i][j], {
                    x: i,
                    y: j
                })
            }
        }

        // manhattan
        for (i = 0; i < this.size * this.size; ++i){
            let final_node = {
                x: ~~(i / this.size),
                y: i - this.size * ~~(i / this.size)
            }
            move += ManHattanHeuristic.calculate_distance(map_index.get(i + 1), final_node);
        }

        // hamming

        for (i = 0; i < this.size; ++i){
            for (j = 0; j < this.size; ++j){
                if (temp_matrix[i][j] != this.default_matrix[i][j]) move++;
            }
        }

        return move;
    }

    hint_log(next_pos){
        if (this.current_pos.x == next_pos.x){
            if (this.current_pos.y == next_pos.y - 1){
                console.log("right");
            }
            else {
                console.log("left");  
           }
        }
        else if (this.current_pos.y == next_pos.y){
            if (this.current_pos.x == next_pos.x - 1){
                console.log("up");
            }
            else {
                console.log("down");
            }
        }
    }

    check_win(){
        for (i = 0; i < this.size; ++i){
            for (j = 0; j < this.size; ++j){
                if (this.current_matrix[i][j] != this.default_matrix[i][j]) return false;
            }
        }
        return true;
    }

    solve(){
        do {
            this.number_of_moves++;
            var possible_move = this.get_possible_move();
            possible_move.forEach((x) => this.queue.push(x));
            this.queue.sort((x, y) => 
                (this.calculate_move(x) + x.g) < (this.calculate_move(y) + y.g)
            );
            let next_pos = this.queue.shift();
            var temp = this.current_matrix[this.current_pos.x][this.current_pos.y];
            this.current_matrix[this.current_pos.x][this.current_pos.y] = this.current_matrix[next_pos.x][next_pos.y];
            this.current_matrix[next_pos.x][next_pos.y] = temp;
            this.hint_log(next_pos);
            [this.current_pos, next_pos] = [next_pos, this.current_pos];
        }
        while (this.number_of_moves < this.MAX_MOVES && !this.check_win());
        if (this.check_win()){
            console.log("Solve!");
            console.log(this.number_of_moves)
        }
    }
}


class ManHattanHeuristic{
    static calculate_distance(p1, p2){
        return Math.abs(p1.x - p2.x) + Math.abs(p1.y - p2.y);
    }    
}