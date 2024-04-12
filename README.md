# STARTING

## 1. client

```bash
yarn install
yarn dev # port : 3001
```

### vsCode_Snippet
- 위치 : 파일 > 기본설정 > 사용자 코드 조각 구성 > typescript.json

    <details>
    <summary>설정코드 살펴보기</summary>

    ```json
    {
        "React Custom HookDefault": {
            "prefix": "tshooksD",
            "body": [
                "export const ${TM_FILENAME_BASE} = () => {",
                "  return  {};",
                "}"
            ],
            "description": "React Custom HookDefault"
        },
        "React Custom HookParameter": {
            "prefix": "tshooksP",
            "body": [
                "type Props = {}",
                "",
                "export const ${TM_FILENAME_BASE} = ({}:Props) => {",
                "  return {};",
                "}"
            ],
            "description": "React Custom HookParameter"
        },
        "React Custom QueryBaseIntance": {
            "prefix": "tsqueryBase",
            "body": [
                "import * as Instance from '@/f_shared/axiosinstance';",
                "import { useQuery } from '@tanstack/react-query';",
                "",
                "type ResponseDto = {",
                "   message: string;",
                "    data: any;",
                "  };",
                "",
                "const queryFn = async () => {",
                "    const res = await Instance.Base.get('/');",
                "  return res.data;",
                "};",
                "",
                "export const ${TM_FILENAME_BASE} = () => {",
                "  const { data, isLoading } = useQuery({",
                "    queryFn,",
                "    queryKey: [''],",
                "  });",
                "  return { data, isLoading, isError }",
                "}"
            ],
            "description": "React Custom QueryBaseIntance"
        },
        "React Custom MutationBaseIntance": {
            "prefix": "tsMutationBase",
            "body": [
                "import * as Instance from '@/f_shared/axiosinstance';",
                "import * as Tans from '@tanstack/react-query';",
                "",
                "type RequestionData = any;",
                "",
                "type ResponseDto = {",
                "   message: string;",
                "    data: any;",
                "  };",
                "",
                "const mutationFn: Tans.MutationFunction<ResponseDto, RequestionData> = async (",
                "  req",
                ") => {",
                "    const res = await Instance.Base.post<ResponseDto>(`/`, req);",
                "  return res.data;",
                "};",
                "",
                "export const ${TM_FILENAME_BASE} = () => {",
                "  const { data, mutate, isPending } = Tans.useMutation({",
                "    mutationFn,",
                "  });",
                "  return { data, isPending, mutate: mutate };",
                "}"
            ],
            "description": "React Custom MutationBaseIntance"
        }
    }
    ```
    </details>
   


## 2. server

```bash
yarn install
yarn start # port : 3003
```
