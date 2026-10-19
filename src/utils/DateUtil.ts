export class DateUtil {
  /**
   * Returns current date and time.
   */
  public static now(): Date {
    return new Date();
  }

  /**
   * Returns current date in YYYY-MM-DD format.
   */
  public static today(): string {
    return this.format(new Date(), "YYYY-MM-DD");
  }

  /**
   * Formats a date.
   */
  public static format(date: Date, format: string): string {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    return format
      .replace("YYYY", String(year))
      .replace("MM", month)
      .replace("DD", day)
      .replace("HH", hours)
      .replace("mm", minutes)
      .replace("ss", seconds);
  }

  /**
   * Returns current timestamp.
   */
  public static timestamp(): number {
    return Date.now();
  }

  /**
   * Returns a unique timestamp-based string.
   */
  public static uniqueId(): string {
    return `${Date.now()}`;
  }

  /**
   * Adds days to a date.
   */
  public static addDays(date: Date, days: number): Date {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }

  /**
   * Subtracts days from a date.
   */
  public static subtractDays(date: Date, days: number): Date {
    return this.addDays(date, -days);
  }

  /**
   * Checks whether a date is in the past.
   */
  public static isPast(date: Date): boolean {
    return date.getTime() < Date.now();
  }

  /**
   * Checks whether a date is in the future.
   */
  public static isFuture(date: Date): boolean {
    return date.getTime() > Date.now();
  }
}
