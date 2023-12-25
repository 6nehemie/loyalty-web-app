export class InputErrors {
  public static setMessage(
    setErrorMessage: React.Dispatch<string>,
    message: string
  ): void {
    setErrorMessage(message);
  }

  public static firstName(message: string) {}
}
