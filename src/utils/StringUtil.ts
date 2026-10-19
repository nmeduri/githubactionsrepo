export class StringUtil {
  /**
   * Checks whether a string is null, undefined or empty.
   */
  public static isEmpty(value: string | null | undefined): boolean {
    return value === null || value === undefined || value.trim() === "";
  }

  /**
   * Checks whether a string is not empty.
   */
  public static isNotEmpty(value: string | null | undefined): boolean {
    return !this.isEmpty(value);
  }

  /**
   * Removes leading and trailing spaces.
   */
  public static trim(value: string): string {
    return value.trim();
  }

  /**
   * Converts string to lower case.
   */
  public static toLowerCase(value: string): string {
    return value.toLowerCase();
  }

  /**
   * Converts string to upper case.
   */
  public static toUpperCase(value: string): string {
    return value.toUpperCase();
  }

  /**
   * Capitalizes the first character.
   */
  public static capitalize(value: string): string {
    if (this.isEmpty(value)) {
      return `${value} Please provide value`;
    }

    return value.charAt(0).toUpperCase() + value.slice(1);
  }

  /**
   * Checks whether string contains a given text.
   */
  public static contains(value: string, searchText: string): boolean {
    return value.includes(searchText);
  }

  /**
   * Checks whether string starts with given text.
   */
  public static startsWith(value: string, searchText: string): boolean {
    return value.startsWith(searchText);
  }

  /**
   * Checks whether string ends with given text.
   */
  public static endsWith(value: string, searchText: string): boolean {
    return value.endsWith(searchText);
  }

  /**
   * Removes all spaces from a string.
   */
  public static removeSpaces(value: string): string {
    return value.replace(/\s+/g, "");
  }

  /**
   * Replaces a specific text.
   */
  public static replace(
    value: string,
    searchText: string,
    replaceText: string,
  ): string {
    return value.replaceAll(searchText, replaceText);
  }

  /**
   * Converts string to number.
   */
  public static toNumber(value: string): number {
    return Number(value);
  }

  /**
   * Checks whether string contains only numbers.
   */
  public static isNumeric(value: string): boolean {
    return value !== "" && !isNaN(Number(value));
  }

  /**
   * Generates a random alphanumeric string.
   */
  public static randomString(length: number): string {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    let result = "";

    for (let i = 0; i < length; i++) {
      result += characters.charAt(
        Math.floor(Math.random() * characters.length),
      );
    }

    return result;
  }

  /**
   * Generates a random email address.
   */
  public static randomEmail(): string {
    return `test_${Date.now()}@example.com`;
  }
}
