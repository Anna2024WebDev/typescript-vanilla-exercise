// interface Word {
//   word: string;
// }
namespace WordUtils {
  interface Word {
    word: string;
  }

  const reverseWord = (word: string): string =>
    word.split("").reverse().join("");

  const capitalizeWord = (word: string): string =>
    word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();

  const repeatWord = (word: string, times: number) => word.repeat(times);

  // catered for swedish - feel free to change 😊
  const countVowels = (word: string) =>
    (word.match(/[aeiouyåäö]/gi) || []).length;

  const transformWord = (
    operation: string,

    word: string,

    param?: number
  ): string => {
    switch (operation) {
      case "reverse":
        return reverseWord(word);
      case "capitalize":
        return capitalizeWord(word);
      case "repeat":
        return repeatWord(word, param as number);
      case "countVowels":
        return countVowels(word).toString();
      default:
        return "Invalid operation";
    }
  };

  const runTransformation = () => {
    const wordInput: string = (
      document.getElementById("word") as HTMLInputElement
    ).value;
    const operationInput: string = (
      document.getElementById("operation") as HTMLSelectElement
    ).value;
    const paramInput: number = parseInt(
      (document.getElementById("param") as HTMLInputElement).value
    );

    const result = transformWord(
      operationInput as "reverse" | "capitalize" | "repeat" | "countVowels",
      wordInput,
      paramInput
    );

    const resultContainer: HTMLElement = document.getElementById(
      "result"
    ) as HTMLDivElement;
    resultContainer.textContent = `Result: ${result}`;
    resultContainer.classList.toggle("active", result !== "");
  };

  // Show/hide param input based on selected operation
  document
    .getElementById("operation")
    ?.addEventListener("change", function (this: HTMLSelectElement) {
      const paramContainer: HTMLElement = document.getElementById(
        "paramContainer"
      ) as HTMLDivElement;
      paramContainer.classList.toggle("active", this.value === "repeat");
    });

  // Event listener for transform button
  document

    .getElementById("transformButton")

    ?.addEventListener("click", runTransformation);
}
