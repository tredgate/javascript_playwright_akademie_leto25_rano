const actualPoints = 76;
const graduationPointsLimit = 75;
const studentName = "Alena Horní";

if (actualPoints >= graduationPointsLimit) {
  console.log(
    `${studentName} prospěl/a s ${actualPoints} body. Minimum bylo ${graduationPointsLimit} bodů.`
  );
} else {
  console.log(
    `${studentName} neprospěl/a s ${actualPoints} body. Minimum bylo ${graduationPointsLimit} bodů, chybělo mu/jí ${
      graduationPointsLimit - actualPoints
    } bodů`
  );
}
