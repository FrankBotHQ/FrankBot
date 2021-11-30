/* eslint-disable @typescript-eslint/no-explicit-any */
export class CosineSimilarity {
  static similarity(string1: string, string2: string): number {
    let longer = string1;
    let shorter = string2;
    if (string1.length < string2.length) {
      longer = string2;
      shorter = string1;
    }
    const longerLength = longer.length;
    if (longerLength == 0) {
      return 1.0;
    }
    return (
      (longerLength - this.editDistance(longer, shorter)) /
      parseFloat(longerLength.toString())
    );
  }

  static editDistance(string1: string, string2: string) {
    string1 = string1.toLowerCase();
    string2 = string2.toLowerCase();

    const costs: number[] = [];
    for (let i = 0; i <= string1.length; i++) {
      let oldValue = i;
      for (let j = 0; j <= string2.length; j++) {
        if (i == 0) {
          costs[j] = j;
        } else {
          if (j > 0) {
            let newValue = costs[j - 1];
            if (string1.charAt(i - 1) != string2.charAt(j - 1))
              newValue = Math.min(Math.min(newValue, oldValue), costs[j]) + 1;
            costs[j - 1] = oldValue;
            oldValue = newValue;
          }
        }
      }
      if (i > 0) {
        costs[string2.length] = oldValue;
      }
    }
    return costs[string2.length];
  }
}
