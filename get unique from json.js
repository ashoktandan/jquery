  var  newDataset = [{'name':'ashok'},{'name':'ashok'},{'name':'ashok'}]; 
            
                Array.prototype.uniqueObjects = function () {
                    function compare(a, b) {
                        for (var prop in a) {
                            if (a[prop] != b[prop]) {
                                return false;
                            }
                        }
                        return true;
                    }
                    return this.filter(function (item, index, list) {
                        for (var i = 0; i < index; i++) {
                            if (compare(item.name, list[i].name)) {
                                return false;
                            }
                        }
                        return true;
                    });
                }
                var unique = newDataset.uniqueObjects();
