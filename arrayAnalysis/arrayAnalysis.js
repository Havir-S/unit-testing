export default function arrayAnalysis(arr) {


  return {
    average: (arr.reduce((all,next) => all + next) / arr.length),
    min: Math.min.apply(null,arr),
    max: Math.max.apply(null,arr),
    length: arr.length
  }
}
