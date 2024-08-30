# Stage 1: Build the Go binary
FROM golang:1.23-alpine AS builder
WORKDIR /app
COPY go.* ./
RUN go mod download
COPY . .
RUN go build -o main .
# RUN go build \
#   -ldflags="-linkmode external -extldflags -static" \
#   -tags netgo \
#   -o main .

# Stage 2: Copy the binary to a minimal base image
FROM scratch
WORKDIR /
COPY --from=builder /app/main main
COPY --from=builder /app/build build
COPY --from=builder /app/internal/migrations internal/migrations
EXPOSE 8090
CMD ["./main", "serve", "--http=0.0.0.0:8090"]
