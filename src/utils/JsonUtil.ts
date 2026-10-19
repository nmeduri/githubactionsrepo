export class JsonUtil {

    /**
     * Converts JSON string to object.
     */
    public static parse<T>(jsonString: string): T {
        return JSON.parse(jsonString) as T;
    }

    /**
     * Converts object to JSON string.
     */
    public static stringify(data: unknown): string {
        return JSON.stringify(data);
    }

    /**
     * Converts object to formatted JSON string.
     */
    public static prettyPrint(data: unknown): string {
        return JSON.stringify(data, null, 2);
    }

    /**
     * Checks whether a string is valid JSON.
     */
    public static isValidJson(jsonString: string): boolean {
        try {
            JSON.parse(jsonString);
            return true;
        } catch {
            return false;
        }
    }

    /**
     * Deep clones an object using JSON serialization.
     */
    public static deepClone<T>(data: T): T {
        return JSON.parse(JSON.stringify(data)) as T;
    }

    /**
     * Gets a property value from a JSON object.
     */
    public static getValue<T>(
        data: Record<string, unknown>,
        key: string
    ): T | undefined {
        return data[key] as T | undefined;
    }
}