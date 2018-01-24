//Constructor de obstaculos.
level = new Array();
_root.createEmptyMovieClip("lev", _root.getNextHighestDepth());
_root.createEmptyMovieClip("lad", _root.getNextHighestDepth());
_root.createEmptyMovieClip("lava", _root.getNextHighestDepth());
_root.createEmptyMovieClip("moving", _root.getNextHighestDepth());
level[0] = new Array(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1);
level[1] = new Array(1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1);
level[2] = new Array(1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1);
level[3] = new Array(1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1);
level[4] = new Array(1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1);
level[5] = new Array(1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1);
level[6] = new Array(1, 0, 0, 0, 0, 0, 1, 1, 1, 4, 0, 0, 1, 1, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 1);
level[7] = new Array(1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 1);
level[8] = new Array(1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 1);
level[9] = new Array(1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 1);
level[10] = new Array(1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 1);
level[11] = new Array(1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 1, 0, 0, 2, 0, 0, 0, 0, 0, 0, 1);
level[12] = new Array(1, 0, 0, 0, 0, 0, 0, 1, 3, 1, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 1);
level[13] = new Array(1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1);
level[14] = new Array(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 3, 1, 1, 1, 1, 1, 1);
for (y=0; y<=14; y++) {
	for (x=0; x<=24; x++) {
		if (level[y][x] == 1) {
			place_brick = lev.attachMovie("block", "block_"+lev.getNextHighestDepth(), lev.getNextHighestDepth(), {_x:x*20+10, _y:y*20+10});
			place_brick.gotoAndStop(level[y][x]);
		}
		if (level[y][x] == 2) {
			ladder_brick = lad.attachMovie("block", "block_"+lad.getNextHighestDepth(), lad.getNextHighestDepth(), {_x:x*20+10, _y:y*20+10});
			ladder_brick.gotoAndStop(level[y][x]);
		}
		if (level[y][x] == 3) {
			lava_brick = lava.attachMovie("block", "block_"+lava.getNextHighestDepth(), lava.getNextHighestDepth(), {_x:x*20+10, _y:y*20+10});
			lava_brick.gotoAndStop(level[y][x]);
		}
		if (level[y][x] == 4) {
			moving_brick = moving.attachMovie("block", "block_"+moving.getNextHighestDepth(), moving.getNextHighestDepth(), {_x:x*20+10, _y:y*20+10});
			moving_brick.gotoAndStop(level[y][x]);
			moving_brick.dir = 1;
			moving_brick.onEnterFrame = function() {
				this._x += this.dir;
				if ((_root.lev.hitTest(this._x+10, this._y, true) and (this.dir>0)) or ((_root.lev.hitTest(this._x-10, this._y, true) and (this.dir<0)))) {
					this.dir *= -1;
				}
				if (_root.player.hitTest(this._x, this._y-11, true) or _root.player.hitTest(this._x+5, this._y-11, true) or _root.player.hitTest(this._x-5, this._y-11, true)) {
					player._x += this.dir;
				}
			};
		}
	}
}
_root.attachMovie("player", "player", _root.getNextHighestDepth(), {_x:40, _y:40});