def is_valid_binary(binary_str):
    """Check if the input string is a valid binary number."""
    return all(char in '01' for char in binary_str) and len(binary_str) <= 8

def binary_to_decimal(binary_str):
    """Convert a binary string to a decimal number."""
    decimal_value = sum(int(digit) * (2 ** idx) for idx, digit in enumerate(reversed(binary_str)))
    return decimal_value

def main():
    binary_str = input("Enter binary digits (up to 8): ")
    
    if not is_valid_binary(binary_str):
        print("Please enter a valid binary number (up to 8 digits).")
        return
    
    decimal_value = binary_to_decimal(binary_str)
    print(f"Decimal value: {decimal_value}")

if __name__ == "__main__":
    main()
