
import json
import re

class JsonUtils:
    @staticmethod
    def validate_json(json_string):
        """
        Validate if the given string is a valid JSON.
        Returns True if valid, False otherwise.
        """
        try:
            json.loads(json_string)
            return True
        except json.JSONDecodeError:
            return False

    @staticmethod
    def format_json(json_string, indent=2):
        """
        Format a valid JSON string with indentation.
        Raises json.JSONDecodeError if the input is invalid JSON.
        """
        parsed = json.loads(json_string)
        return json.dumps(parsed, indent=indent, sort_keys=False)

    @staticmethod
    def fix_common_issues(json_string):
        """
        Attempt to fix common JSON issues such as:
        - Single quotes replaced with double quotes
        - Trailing commas removed
        - Remove comments (// or /* */)
        Note: This is a heuristic fixer and may not fix all invalid JSON.
        """
        # Remove JavaScript-style comments
        json_string = re.sub(r'//.*?\n|/\*.*?\*/', '', json_string, flags=re.S)

        # Remove trailing commas before } or ]
        json_string = re.sub(r',(\s*[}\]])', r'\1', json_string)

        # Replace single quotes with double quotes (only for keys and string values)
        # This is a naive approach and may fail on complex cases
        def replace_quotes(match):
            content = match.group(0)
            if content.startswith("'") and content.endswith("'"):
                inner = content[1:-1].replace('"', '\\"')
                return f'"{inner}"'
            return content

        json_string = re.sub(r"'([^'\\]*(?:\\.[^'\\]*)*)'", replace_quotes, json_string)

        return json_string

    @staticmethod
    def fix_and_validate(json_string):
        """
        Fix common issues and validate JSON.
        Returns a tuple (fixed_json_string, is_valid)
        """
        fixed = JsonUtils.fix_common_issues(json_string)
        is_valid = JsonUtils.validate_json(fixed)
        return fixed, is_valid


if __name__ == "__main__":
    # Example usage
    broken_json = """
    {
        'name': 'John', // This is a comment
        'age': 30,
        'city': 'New York',
    }
    """

    print("Original JSON:")
    print(broken_json)

    fixed_json, valid = JsonUtils.fix_and_validate(broken_json)
    print("\nFixed JSON:")
    print(fixed_json)

    print("\nIs valid JSON after fix?", valid)

    if valid:
        formatted = JsonUtils.format_json(fixed_json)
        print("\nFormatted JSON:")
        print(formatted)
