const userConfig = {
    extends: ["@commitlint/config-conventional"],
    plugins: ["commitlint-plugin-function-rules"],
    // 提交提示
    prompt: {
        alias: {
            b: "build: bump dependencies",
            c: "chore: update config",
            f: "docs: fix typos",
            r: "docs: update README",
            s: "style: update code format"
        },
        allowCustomIssuePrefixs: false,
        allowEmptyIssuePrefixs: false,
        typesAppend: [
            {
                name: "workflow: workflow improvements",
                value: "workflow"
            },
            {
                name: "types:    type definition file changes",
                value: "types"
            }
        ]
    },
    rules: {
        "body-leading-blank": [2, "always"],
        "footer-leading-blank": [1, "always"],
        "header-max-length": [2, "always", 108],
        "scope-enum": [0],
        "subject-case": [0],
        "subject-empty": [2, "never"],
        "type-empty": [2, "never"],
        "type-enum": [
            2,
            "always",
            [
                "feat",
                "fix",
                "perf",
                "style",
                "docs",
                "test",
                "refactor",
                "build",
                "ci",
                "chore",
                "revert",
                "types",
                "release"
            ]
        ]
    }
};

export default userConfig;